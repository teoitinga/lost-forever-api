
const {
    StatusCodes,
} = require('http-status-codes');

const userService = require('../services/user-service')


class userController {

    async login(req, res) {
        console.log(res)
        const _login = req.body.login;
        const _password = req.body.password;

        const token = await userService.login(_login, _password);

        res.status(StatusCodes.OK).json(token);

    }

    async getUserById(req, res) {

        const id = req.params.id

        const response = await userService.getUserById(id)

        res.status(StatusCodes.OK).json(response)

    }

}
module.exports = new userController()