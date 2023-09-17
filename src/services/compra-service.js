const Model = require('../database/models/compra-model');
const Dto = require('../dtos/compra-dto');
const Exception = require('../exceptions/lost-exception');

const Service = require('../middlewares/auth');


const Serviceitens = require('../services/detalhe-compra-service');
const serviceitens = new Serviceitens();


const {
    StatusCodes,
} = require('http-status-codes');


module.exports = class CompraService {

    async getPartner(req, res) {

        let response = await service.getToken(req, res);
        response = await service.decodetoken(response);

        return response['partner'];
    }

    async findById(req, res) {

        const partnerid = await this.getPartner(req, res);

        const query = `
        select * from ${process.env.PROD_DB_NAME}.compra
        where id = '${req.params.id}'
        ;
        `;
        //where
        //and compra.partner = '${partnerid}'

        const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });
        if (response.length == 0) {
            throw new Error();
        }

        response = response.map(r => new Dto(r));

        let itens = this.serviceitens.findByIdCompra();

        response.itens = itens;

        return response


    }
    async findAll(req, res) {

        const partnerid = await this.getPartner(req, res);

        const query = `
        select * from ${process.env.PROD_DB_NAME}.compra
        ;
        `;
        //        where
        //        compra.partner = '${partnerid}'

        const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });
        if (response.length == 0) {
            throw new Error();
        }
        return response.map(r => new Dto(r));


    }

}
