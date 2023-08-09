
const {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} = require('http-status-codes');

const ClienteService = require('../services/cliente-service')
const clienteService = new ClienteService()

class userController{

    async getClienteById(req, res) {
    
        const id = req.params.id
        try{
            const response = await clienteService.getClienteById(id)
            res.status(StatusCodes.OK).json(response)

        }catch(e){
            res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NO_CONTENT)
        }

    }

}
module.exports = userController