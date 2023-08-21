const Model = require('../database/models/persona-model');
const Dto = require('../dtos/user-dto');
const partnerDto = require('../dtos/partner-dto');

const { Op } = require("sequelize");

const connection = require('../database/models');
const { response } = require('express');
require('dotenv')
class UserService {
//$2a$10$Z6GtNQhML9g08gR.evUVe.6RFY/UB.HLyqWbQKgwERJemUhZiaNxq
    async getUserById(id) {

        const query = `
        select * from ${process.env.PROD_DB_NAME}.persona
        where
        persona.id='${id}'
        and persona.categoria <> 'c'
            ;
        `;

        const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });

        return new Dto(response[0]);

    }
    async getParnerById(id) {

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

module.exports = UserService