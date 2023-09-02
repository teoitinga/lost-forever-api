
const Auth = require('../middlewares/auth');


const Compra = require('../controllers/compra-controller');
const compra = new Compra();


/** @param { import('express').Express} app */


module.exports = app => {
    app.get('/compras', compra.findAll)
    app.get('/compras/:id', compra.findById)
}