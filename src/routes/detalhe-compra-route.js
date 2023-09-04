
const Auth = require('../middlewares/auth');


const Controller = require('../controllers/detalhe-compra-controller');
const detalhecompra = new Controller();


/** @param { import('express').Express} app */


module.exports = app => {
    app.get('/detalhe-compras', detalhecompra.findAll)
    app.get('/detalhe-compras/:id', detalhecompra.findById)
    app.get('/detalhe-compras/bycompra/:id', detalhecompra.findByCompra)
}