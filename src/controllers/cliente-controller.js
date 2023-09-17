
const {

    StatusCodes,

} = require('http-status-codes');
const jwt = require('jsonwebtoken');
const ClienteService = require('../services/cliente-service');


const clienteService = new ClienteService()

const Exception = require('../exceptions/lost-exception');

class userController {

    async getClienteById(req, res) {

        const response = await clienteService.getClienteById(req, res)
        res.status(StatusCodes.OK).json(response)

    }

    async findAll(req, res) {


        const response = await clienteService.findAll(req, res);

        res.status(StatusCodes.OK).json(response)



    }
    async findByNameContain(req, res) {



        const response = await clienteService.findByNameContain(req, res);

        res.status(StatusCodes.OK).json(response)


    }

}
module.exports = userController