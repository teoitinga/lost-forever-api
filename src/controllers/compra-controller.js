const {

    StatusCodes,

} = require('http-status-codes');


const Service = require('../services/compra-service');
const service = new Service()

const jwt = require('jsonwebtoken');
const Auth = require('../middlewares/auth');
const auth = new Auth();

const Exception = require('../exceptions/lost-exception');

module.exports = class compraController {

    async findById(req, res) {
        console.log('acessando rota de compra')
        try {

            const response = await service.findById(req, res)
            res.status(StatusCodes.OK).json(response)

        } catch (e) {
            const exception = await new Exception({
                name: e.name? e.name : 'Não há compras registradas',
                message: e.message? e.message : `Não foi localizado nenhum registro`,
                status: e.status? e.status : await StatusCodes.NOT_FOUND,
            });

            res.status(exception.status).json(exception)
        }

    }

    async findAll(req, res) {
        console.log('acessando rota de compra')
        try {

            const response = await service.findAll(req, res);

            res.status(StatusCodes.OK).json(response)

        } catch (e) {

            const exception = await new Exception({
                name: e.name? e.name : 'Não há compras registrados',
                message: e.message? e.message : `Não foi localizado nenhum registro`,
                status: e.status? e.status : await StatusCodes.NOT_FOUND,
            });

            res.status(exception.status).json(exception)

        }

    }

}