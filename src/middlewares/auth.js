const {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} = require('http-status-codes');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

require('dotenv').config();

const perfil = require('../../perfil');

function authenticate(req, res, next) {

    const { user, password } = req.body

    if (user == 'luiz' && password == '123') {

        const tokenObject = {
            id: 1,
            user: "João Paulo Santana Gusmão"
        }

        const token = jwt.sign(JSON.stringify(tokenObject), process.env.SECRET_KEY)

        res.status(StatusCodes.ACCEPTED).json({ token: token })

    } else {

        res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.NON_AUTHORITATIVE_INFORMATION)
    }
}
function verify(req, res, next) {

    const token = 1;

    //Se o token é válido, segue com o acesso
    if (token) {
        return next();
    }

    res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.NON_AUTHORITATIVE_INFORMATION)
}

function isMaster(req, res, next) {

    const permissao = 'm'; //Define a permissão do usuário atual

    //Se tem permisão MASTER, segue com o acesso
    if (permissao === perfil.MASTER) {
        return next();
    }

    res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.NON_AUTHORITATIVE_INFORMATION)
}

module.exports = { authenticate, verify, isMaster }