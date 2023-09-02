const Model = require('../database/models/persona-model');
const Dto = require('../dtos/cliente-dto');
const Exception = require('../exceptions/lost-exception');

const Service = require('../middlewares/auth');
const service = new Service();

const {
    StatusCodes,
} = require('http-status-codes');


module.exports = class ClienteService {

    async getPartner(req, res) {

        let response = await service.getToken(req, res);
        response = await service.decodetoken(response);

        return response['partner'];
    }

    async getClienteById(req, res) {

        const partnerid = await this.getPartner(req, res);
        const id = req.params.id;

        const query = `
        select * from ${process.env.PROD_DB_NAME}.persona
        where
        persona.id=${id}
        and persona.categoria = 'c'
        and persona.partner = '${partnerid}'
        ;
            `;
        try {

            const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });
            return new Dto(response[0]);

        } catch (e) {

            const exception = await new Exception({
                name: 'Cliente não localizado',
                message: 'Não foi localizado nenhum registro para este cliente!',
                status: await StatusCodes.NOT_FOUND,
            });

            throw exception;
        }

    }

    async findAll(req, res) {
        
        const partnerid = await this.getPartner(req, res);

        const query = `
        select * from ${process.env.PROD_DB_NAME}.persona
        where
        persona.categoria = 'c'
        and persona.partner = '${partnerid}'
            ;
        `;
        try {
            const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });
            if (response.length == 0) {
                throw new Error();
            }
            return response.map(r => new Dto(r));

        } catch (e) {
            const exception = await new Exception({
                name: 'Não há clientes registrados',
                message: `Não foi localizado nenhum registro`,
                status: await StatusCodes.NOT_FOUND,
            });

            throw exception;
        }

    }
    
    async findByNameContain(req, res) {

        const text = req.params.name;
        const partnerid = await this.getPartner(req, res);

        const query = `
        select * from ${process.env.PROD_DB_NAME}.persona
        where
        (
            persona.nome like('%${text}%')
            or persona.nome like('%${text}%')
            or persona.fone like('%${text}%')
        )
        and persona.categoria = 'c'
        and persona.partner = '${partnerid}'
            ;
        `;
        try {
            const response = await Model.sequelize.query(query, { type: Model.sequelize.QueryTypes.SELECT });
            if (response.length == 0) {
                throw new Error();
            }
            return response.map(r => new Dto(r));

        } catch (e) {
            const exception = await new Exception({
                name: 'Cliente não localizado',
                message: `Não foi localizado nenhum registro para o cliente ${text}`,
                status: await StatusCodes.NOT_FOUND,
            });

            throw exception;
        }

    }
}
