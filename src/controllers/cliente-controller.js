
const {

    StatusCodes,

} = require('http-status-codes');
const jwt = require('jsonwebtoken');
const ClienteService = require('../services/cliente-service');
const Auth = require('../middlewares/auth');
const auth = new Auth();
const clienteService = new ClienteService()

class userController {

    async getClienteById(req, res) {

        try {

            const response = await clienteService.getClienteById(req, res)
            res.status(StatusCodes.OK).json(response)

        } catch (e) {
            res.status(e.status).json(e)
        }

    }

    async findAll(req, res) {

        try {

            const response = await clienteService.findAll(req, res);

            res.status(StatusCodes.OK).json(response)

        } catch (e) {

            res.status(e.status).json(e)

        }

    }
    async findByNameContain(req, res) {

        try {

            const name = req.params.name;
            const token = await auth.getToken(req, res);
            const decoded = jwt.decode(token);
            const response = await clienteService.findByNameContain(name, decoded['partner']);

            res.status(StatusCodes.OK).json(response)

        } catch (e) {

            res.status(e.status).json(e)

        }

    }

}
module.exports = userController