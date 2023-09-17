/* Encriptação de dados */
const bcrypt = require('bcryptjs');

const Model = require('../database/models/persona-model');
const Dto = require('../dtos/user-dto');
const partnerDto = require('../dtos/partner-dto');
const moment = require('moment');
const { Op } = require("sequelize");
const jwt = require('jsonwebtoken');
const {
    ReasonPhrases,
    StatusCodes,
} = require('http-status-codes');
const connection = require('../database/models');
const { response } = require('express');

const { BadRequesException,
    NotFoundException
} = require('../exceptions/lost-exception');

require('dotenv')

class UserService {

    async login(_login, _password) {
        //Recupera os dados do usuário
        const query = `
            select * from ${process.env.PROD_DB_NAME}.persona
            where
            persona.id='${_login}'
            and (persona.categoria <> 'u')
            or (persona.categoria <> 'm')
                ;
            `;

        let user = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });

        if (user.length == 0) {
            throw new NotFoundException('Usuário não encontrado!')
        }

        user = new Dto(user[0]);

        //comprara a senha
        const isMatch = await bcrypt.compare(_password, user.password)

        if (!isMatch) {
            throw new BadRequesException('Password não está correto, tente novamente');
        }


        //verifica permissões

        //verifica expiração do usuário

        //verifica expiração da empresa na qual o usuário pertence

        //condifica o token
        let dataatual = await moment()

        user.logged = dataatual.format();
        user.expires = dataatual.add(process.env.TIME_EXPIRES_HOUR, 'hours').format();

        const token = await jwt.sign(JSON.stringify(user), process.env.SECRET_KEY)

        //retorna o token
        return { token: token }

    }

    async getUserById(id, parnterid) {

        const query = `
            select * from ${process.env.PROD_DB_NAME}.persona
            where
            persona.id='${id}'
            and (persona.categoria <> 'u')
            or (persona.categoria <> 'm')
                ;
            `;

        const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });


        if (response.length == 0) {
            throw new NotFoundException('Usuário não encontrado!')
        }

        return new Dto(response[0]);

    }

    async getPartnerById(id) {

        if (!id) {
            throw new BadRequesException('Não foi possível recuperar as informações da sua empresa')
        }
        const query = `
            select * from ${process.env.PROD_DB_NAME}.perfil
            where
            perfil.id='${id}'
                ;
            `;

        const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });

        return new partnerDto(response[0]);


    }

}

module.exports = new UserService()