
const {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} = require('http-status-codes');

const UserService = require('../services/user-service')
const userService = new UserService()

class userController{

    async getUserById(req, res) {
    
        const id = req.params.id

        try{
            const response = await userService.getUserById(id)
    
            res.status(StatusCodes.OK).json(response)

        }catch(e){
            res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NO_CONTENT)
        }
    }

}
module.exports = userController