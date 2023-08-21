
const {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} = require('http-status-codes');

const ClienteService = require('../services/cliente-service');
const { authenticate } = require('../middlewares/auth');
const clienteService = new ClienteService()

class userController {

    async getClienteById(req, res) {

        const id = req.params.id;
        
        try {

            const response = await clienteService.getClienteById(id)
            res.status(StatusCodes.OK).json(response)

        } catch (e) {

            res.status(e.status).json(e)
        }

    }
    async findByNameContain(req, res) {

        try {

            const name = req.params.name;
            const token = authenticate.getToken(req);
            const response = await clienteService.findByNameContain(name, token);

            res.status(StatusCodes.OK).json(response)

        } catch (e) {

            res.status(e.status).json(e)
        }

    }

}
module.exports = userController