const Model = require('../database/models/compra-model');
const Dto = require('../dtos/detalhe-compra-dto');
const Exception = require('../exceptions/lost-exception');

const Service = require('../middlewares/auth');
const service = new Service();

const {
    StatusCodes,
} = require('http-status-codes');


module.exports = class CompraService {

    async  getPartner(req, res) {

        let response = await service.getToken(req, res);
        response = await service.decodetoken(response);

        return response['partner'];
    }

    async findByIdCompra(id) {
        
        const partnerid = await this.getPartner(req, res);

        const query = `
        select * from ${process.env.PROD_DB_NAME}.detalhecompra
        where fKcompra = '${id}'
        ;
        `;
        //where
        //and compra.partner = '${partnerid}'
        try {
            const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });
            if (response.length == 0) {
                throw new Error();
            }
            return response.map(r => new Dto(r));

        } catch (e) {
            const exception = await new Exception({
                name: 'Não há itens registradas',
                message: `Não foi localizado nenhum registro`,
                status: await StatusCodes.NOT_FOUND,
            });

            throw exception;
        }

    }
    async findByCompra(req, res) {
        
        const partnerid = await this.getPartner(req, res);

        const query = `
        select * from ${process.env.PROD_DB_NAME}.detalhecompra
        where fKcompra = '${req.params.id}'
        ;
        `;
        //where
        //and compra.partner = '${partnerid}'
        try {
            const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });
            if (response.length == 0) {
                throw new Error();
            }
            return response.map(r => new Dto(r));

        } catch (e) {
            const exception = await new Exception({
                name: 'Não há itens registradas',
                message: `Não foi localizado nenhum registro`,
                status: await StatusCodes.NOT_FOUND,
            });

            throw exception;
        }

    }
    async findById(req, res) {
        
        const partnerid = await this.getPartner(req, res);

        const query = `
        select * from ${process.env.PROD_DB_NAME}.detalhecompra
        where id = '${req.params.id}'
        ;
        `;
        //where
        //and compra.partner = '${partnerid}'
        try {
            const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });
            if (response.length == 0) {
                throw new Error();
            }
            return response.map(r => new Dto(r));

        } catch (e) {
            const exception = await new Exception({
                name: 'Não há itens registradas',
                message: `Não foi localizado nenhum registro`,
                status: await StatusCodes.NOT_FOUND,
            });

            throw exception;
        }

    }
    async findAll(req, res) {
        
        const partnerid = await this.getPartner(req, res);

        const query = `
        select * from ${process.env.PROD_DB_NAME}.detalhecompra

        ;
        `;
//        where
//        compra.partner = '${partnerid}'
        try {
            const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });
            if (response.length == 0) {
                throw new Error();
            }
            return response.map(r => new Dto(r));

        } catch (e) {
            const exception = await new Exception({
                name: 'Não há itens registradas registrados',
                message: `Não foi localizado nenhum registro`,
                status: await StatusCodes.NOT_FOUND,
            });

            throw exception;
        }

    }

}
