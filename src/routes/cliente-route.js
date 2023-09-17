
const Cliente = require('../controllers/cliente-controller');
const cliente = new Cliente();


/** @param { import('express').Express} app */


module.exports = app => {
    app.get('/cliente/:id', cliente.getClienteById),
    app.get('/clientebyname/:name', cliente.findByNameContain)
    app.get('/clientes', cliente.findAll)
    app.put('/clientes/:id', cliente.findAll)//ajusta registro
    app.put('/clientes-suspender/:id', cliente.findAll)//Bloqueia para não realizar compras
                                                        //Somente o Proprietário tem acesso
    app.put('/clientes-habilitar/:id', cliente.findAll)//habilita a registra compras
}