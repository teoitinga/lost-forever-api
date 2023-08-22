
const Auth = require('../middlewares/auth');
const auth = new Auth();

const User = require('../controllers/cliente-controller');
const user = new User();


/** @param { import('express').Express} app */


module.exports = app => {
    app.get('/cliente/:id', user.getClienteById),
    app.get('/clientebyname/:name', user.findByNameContain)
}