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
const Exception = require('../exceptions/lost-exception');

require('dotenv')

module.exports = class UserService {

    async getUserById(id, parnterid) {

        const query = `
            select * from ${process.env.PROD_DB_NAME}.persona
            where
            persona.id='${id}'
            and persona.categoria <> 'u'
                ;
            `;
 
        const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });

        return new Dto(response[0]);

    }

    async getPartnerById(id) {

        try{
            const query = `
            select * from ${process.env.PROD_DB_NAME}.perfil
            where
            perfil.id='${id}'
                ;
            `;
    
            const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });
    
            return new partnerDto(response[0]);

        }catch(e){
            const exception = await new Exception({
                name: 'Error',
                message: e.message,
                status: StatusCodes.INTERNAL_SERVER_ERROR
            });

            return exception;
        }

    }

    async validPassword(response, user) {
        let dataatual = await moment()

        user.logged = dataatual.format();
        user.expires = dataatual.add(process.env.TIME_EXPIRES_HOUR, 'hours').format();

        const token = await jwt.sign(JSON.stringify(user), process.env.SECRET_KEY)

        return response.status(StatusCodes.ACCEPTED).send({ token: token });
        //return exception;
    }

    async invalidPassword(response) {

        const exception = await new Exception({
            name: 'Error',
            message: ReasonPhrases.NON_AUTHORITATIVE_INFORMATION,
            status: StatusCodes.UNAUTHORIZED
        });

        return exception;

    }
}

