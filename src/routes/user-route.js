const User = require('../controllers/user-controller');
const user = new User();

/** @param { import('express').Express} app */


module.exports = app => {
    app.get('/user/:id', user.getUserById)
    app.get('/user/registra-compra', user.getUserById)
    app.get('/user/registra-haver', user.getUserById)
    app.get('/user/quitar-debito', user.getUserById)
    app.get('/user/cobranca/:idcliente', user.getUserById)
}