
const {

    StatusCodes,

} = require('http-status-codes');
const jwt = require('jsonwebtoken');
const ClienteService = require('../services/cliente-service');
const Auth = require('../middlewares/auth');
const auth = new Auth();
const clienteService = new ClienteService()

const Exception = require('../exceptions/lost-exception');

class userController {

    async getClienteById(req, res) {

        try {

            const response = await clienteService.getClienteById(req, res)
            res.status(StatusCodes.OK).json(response)

        } catch (e) {
            const exception = await new Exception({
                name: e.name? e.name : 'Não há clientes registrados',
                message: e.message? e.message : `Não foi localizado nenhum registro`,
                status: e.status? e.status : await StatusCodes.NOT_FOUND,
            });

            res.status(exception.status).json(exception)
        }

    }

    async findAll(req, res) {

        try {

            const response = await clienteService.findAll(req, res);

            res.status(StatusCodes.OK).json(response)

        } catch (e) {

            const exception = await new Exception({
                name: e.name? e.name : 'Não há clientes registrados',
                message: e.message? e.message : `Não foi localizado nenhum registro`,
                status: e.status? e.status : await StatusCodes.NOT_FOUND,
            });

            res.status(exception.status).json(exception)

        }

    }
    async findByNameContain(req, res) {

        try {


            const response = await clienteService.findByNameContain(req, res);

            res.status(StatusCodes.OK).json(response)

        } catch (e) {
            const exception = await new Exception({
                name: e.name? e.name : 'Não há clientes registrados',
                message: e.message? e.message : `Não foi localizado nenhum registro`,
                status: e.status? e.status : await StatusCodes.NOT_FOUND,
            });

            res.status(exception.status).json(exception)

        }

    }

}
module.exports = userController