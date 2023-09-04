const {

    StatusCodes,

} = require('http-status-codes');


const Service = require('../services/detalhe-compra-service');
const service = new Service()

const jwt = require('jsonwebtoken');
const Auth = require('../middlewares/auth');
const auth = new Auth();

const Exception = require('../exceptions/lost-exception');

module.exports = class detalhecompraController {

    async findByCompra(req, res) {

        try {

            const response = await service.findByCompra(req, res)
            res.status(StatusCodes.OK).json(response)

        } catch (e) {
            const exception = await new Exception({
                name: e.name? e.name : 'Não há itens registrados',
                message: e.message? e.message : `Não foi localizado nenhum registro`,
                status: e.status? e.status : await StatusCodes.NOT_FOUND,
            });

            res.status(exception.status).json(exception)
        }

    }
    async findById(req, res) {

        try {

            const response = await service.findById(req, res)
            res.status(StatusCodes.OK).json(response)

        } catch (e) {
            const exception = await new Exception({
                name: e.name? e.name : 'Não há itens registrados',
                message: e.message? e.message : `Não foi localizado nenhum registro`,
                status: e.status? e.status : await StatusCodes.NOT_FOUND,
            });

            res.status(exception.status).json(exception)
        }

    }

    async findAll(req, res) {

        try {

            const response = await service.findAll(req, res);

            res.status(StatusCodes.OK).json(response)

        } catch (e) {

            const exception = await new Exception({
                name: e.name? e.name : 'Não há itens registrados',
                message: e.message? e.message : `Não foi localizado nenhum registro`,
                status: e.status? e.status : await StatusCodes.NOT_FOUND,
            });

            res.status(exception.status).json(exception)

        }

    }

}