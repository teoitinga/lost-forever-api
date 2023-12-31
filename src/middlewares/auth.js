const jwt = require('jsonwebtoken');

const moment = require('moment');
require('dotenv').config();

const { BadRequesException,
    NotFoundException } = require('../exceptions/lost-exception');

const perfil = require('../../perfil');

const service = require('../services/user-service');


/* Encriptação de dados */
const bcrypt = require('bcryptjs');



async function decodetoken(token) {

    const decoded = jwt.decode(token);
    return decoded;

}

async function authenticate(req, res, next) {

    const _login = req.body.login;
    const _password = req.body.password;

    const user = await service.getUserById(_login);

    if (!user.password) {
        const e = user;
        throw new BadRequesException('Password não informado');

    }

    bcrypt.compare(_password, user.password, (err, isMatch) => {
        if (err || (isMatch == false)) {

            throw new BadRequesException('Password não está correto, tente novamente');

        }

        return service.validPassword(res, user)

    });


}
async function authenticate_(req, res, next) {

    const { _login, _password } = {
        _login: req.body['login'],
        _password: req.body['password']
    }

    //Localiza os dados do usuario

    const user = await service.getUserById(_login)
    //Codifica uma senha
    const hash = bcrypt.hashSync('jacare', process.env.SECRET_KEY);
    console.log(hash)

    //Verifica se a senha é compatível


    if (!user) {
        throw new BadRequesException('Sem identificação de usuário - Credencial inválida');
    }

    bcrypt.compare(_password, user.password, (err, isMatch) => {
        if (err || (isMatch == false)) {

            throw new BadRequesException('Credencial inválida');
        }

        return service.validPassword(res, user)

    });


}



async function getToken(req, res) {

    let exception = await new Exception({
        name: 'Error',
        message: ReasonPhrases.NON_AUTHORITATIVE_INFORMATION,
        status: StatusCodes.UNAUTHORIZED
    });

    //Se existe o token válido
    let token = undefined;
    let decoded = undefined;


    token = await req.headers['authorization']

    if (!token) {
        const exception = await new Exception({
            name: 'No token access',
            message: 'Não existe token de acceso!',
            status: await StatusCodes.FORBIDDEN,
        });

        throw exception;
    }

    token = token.replace('Bearer ', '');

    decoded = jwt.decode(token);



    //Se o token é válido, segue com o acesso
    //se não está expirado
    if (moment().isAfter(moment(decoded['expires']))) {

        const exception = await new Exception({
            name: 'Token expired',
            message: 'O tempo de acesso para este token expirou!',
            status: await StatusCodes.FORBIDDEN,
        });

        throw exception;
    }

    //Verifica se partner ainda está ativo
    let partnerid = undefined;
    let partner = undefined;

    try {

        partnerid = await decoded['partner'];
        partner = await service.getPartnerById(partnerid);

    } catch (e) {

        const exception = await new Exception({
            name: `Informações da empresa não podem ser obtidas.`,
            message: 'O token não fornece informações sobre a empresa que está na operação',
            status: await StatusCodes.BAD_REQUEST
        });

        throw exception;
    }

    const encerra_em = await moment(partner['atualizacao_data']).add(partner['tempo_de_permissao'], 'M')

    if (moment().isAfter(encerra_em)) {

        const exception = await new Exception({
            name: `O contrato encerrou em ${encerra_em.format('DD/MM/YYYY')}`,
            message: 'Este estabelecimento encerrou o contrato para prestação de serviços.',
            status: await StatusCodes.FORBIDDEN
        });

        throw exception;
    }

    return token;
}

async function isMaster(req, res, next) {

    console.log('verificando permissoes');
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

    throw exception;

}

//Se existe um token válido segue o fluxo
async function verify(req, res, next) {
    console.log('verificando autenticação');

    let token = undefined;


    /**
     * Verifica Token
     */
    let exception = await new Exception({
        name: 'Error',
        message: ReasonPhrases.NON_AUTHORITATIVE_INFORMATION,
        status: StatusCodes.UNAUTHORIZED
    });

    //Se existe o token válido
    //let token = undefined;
    let decoded = undefined;


    token = await req.headers['authorization']

    if (!token) {
        const exception = await new Exception({
            name: 'No token access',
            message: 'Não existe token de acceso!',
            status: await StatusCodes.FORBIDDEN,
        });

        throw exception;
    }

    token = token.replace('Bearer ', '');

    decoded = jwt.decode(token);




    //Se o token é válido, segue com o acesso
    //se não está expirado
    if (moment().isAfter(moment(decoded['expires']))) {

        const exception = await new Exception({
            name: 'Token expired',
            message: 'O tempo de acesso para este token expirou!',
            status: await StatusCodes.FORBIDDEN,
        });

        throw exception;
    }

    //Verifica se partner ainda está ativo
    let partnerid = undefined;
    let partner = undefined;



    partnerid = await decoded['partner'];
    partner = await service.getPartnerById(partnerid);



    const encerra_em = await moment(partner['atualizacao_data']).add(partner['tempo_de_permissao'], 'M')

    if (moment().isAfter(encerra_em)) {

        const exception = await new Exception({
            name: `O contrato encerrou em ${encerra_em.format('DD/MM/YYYY')}`,
            message: 'Este estabelecimento encerrou o contrato para prestação de serviços.',
            status: await StatusCodes.FORBIDDEN
        });

        throw exception;
    }


    //imprime('Testen de execução de função')
    //token = await this.getToken(req, res);

    if (token) {

        next();

    } else {
        const exception = await new Exception({
            name: e.name ? e.name : 'Não tem autenticação',
            message: e.message ? e.message : `Autenticação não permitida`,
            status: e.status ? e.status : await StatusCodes.NOT_FOUND,
        });

        res.status(exception.status).json(exception)
    }



}
module.exports = {
    decodetoken,
    authenticate,
    getToken,
    isMaster,
    verify,
    
}