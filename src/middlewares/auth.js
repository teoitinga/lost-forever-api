const {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} = require('http-status-codes');

const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');

const moment = require('moment');
require('dotenv').config();
const Exception = require('../exceptions/lost-exception');

const perfil = require('../../perfil');
const Service = require('../services/user-service');
const service = new Service();

/* Encriptação de dados */
const bcrypt = require('bcryptjs');


async function authenticate(req, res, next) {

    const { _login, _password } = {
        _login: req.body['login'],
        _password: req.body['password']
    }

    //Localiza os dados do usuario
    const user = await service.getUserById(_login)

    //Codifica uma sehnah
    //const hash = bcrypt.hashSync('jacare', process.env.SECRET_KEY);


    //Verifica se a senha é compatível

    bcrypt.compare(_password, user.password, (err, isMatch) => {
        if (err || (isMatch == false)) {

            return invalidPassword(res)
        }

        return validPassword(res, user)

    });

}

async function validPassword(response, user) {
    let dataatual = await moment()

    user.logged = dataatual.format();
    user.expires = dataatual.add(process.env.TIME_EXPIRES_HOUR, 'hours').format();

    const token = await jwt.sign(JSON.stringify(user), process.env.SECRET_KEY)

    return response.status(StatusCodes.ACCEPTED).send({ token: token });
    //return exception;
}

async function invalidPassword(response) {

    const r = await new Exception({
        name: 'Error',
        message: ReasonPhrases.NON_AUTHORITATIVE_INFORMATION,
        status: StatusCodes.UNAUTHORIZED
    });

    //return response.status(StatusCodes.UNAUTHORIZED).json(r);
    return exception;

}
async function getToken(req, res) {

    let exception = await new Exception({
        name: 'Error',
        message: ReasonPhrases.NON_AUTHORITATIVE_INFORMATION,
        status: StatusCodes.UNAUTHORIZED
    });

    //Se existe o token válido
    let token = undefined;

    try {
        token = await req.headers['authorization']

        if (!token) {
            const exception = await new Exception({
                name: 'No token access',
                message: 'Não existe token de acceso!',
                status: await StatusCodes.FORBIDDEN,
            });
        
            throw  exception;
        }
        
        token = token.replace('Bearer ', '');
        
        decoded = jwt.decode(token);
        
        
    } catch (e) {

        exception.name = 'Token not valid';
        exception.message = 'Não existe uma credencial válida para permitir o acesso';
        exception.status = await StatusCodes.FORBIDDEN;
        
        //return res.status(StatusCodes.FORBIDDEN).json(exception);
        throw exception;
    }
    
    //Se o token é válido, segue com o acesso
    //se não está expirado
    if (moment().isAfter(moment(decoded['expires']))) {
        //return res.status(StatusCodes.FORBIDDEN).json(exception);
        
        const exception = await new Exception({
            name: 'Token expired',
            message: 'O tempo de acesso para este token expirou!',
            status: await StatusCodes.FORBIDDEN,
        });
    
        throw  exception;
    }

    //Verifica se partner ainda está ativo
    partnerid = await decoded['partner'];

    partner = await service.getParnerById(partnerid);
    encerra_em = await moment(partner['atualizacao_data']).add(partner['tempo_de_permissao'], 'M')


    if (moment().isAfter(encerra_em)) {

        //return res.status(StatusCodes.FORBIDDEN).json(exception);
        const exception = await new Exception({
            name: `O contrato encerrou em ${encerra_em.format('DD/MM/YYYY')}`,
            message: 'Este estabelecimento encerrou o contrato para prestação de serviços.',
            status: await StatusCodes.FORBIDDEN
        });
    
        throw exception;
    }

    return token;
}
//Se existe um token válido segue o fluxo
async function verify(req, res, next) {
    try {
        const token = await getToken(req, res);
        
        if (token) {
            
            next();
            
        }
        
        //return res.status(StatusCodes.UNAUTHORIZED).json(r);
        //return expeti
        
    } catch (exception) {

        //throw exception;
        res.status(exception.status).json(exception);

    }

}


async function isMaster(req, res, next) {

    const permissao = 'm'; //Define a permissão do usuário atual

    //Se tem permisão MASTER, segue com o acesso
    if (permissao === perfil.MASTER) {
        return next();
    }

    const exception = await new Exception({
        name: 'Error',
        message: ReasonPhrases.NON_AUTHORITATIVE_INFORMATION,
        status: StatusCodes.UNAUTHORIZED
    });

    //return res.status(StatusCodes.UNAUTHORIZED).json(r);
    throw exception;

}

module.exports = { authenticate, verify, isMaster }