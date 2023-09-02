//importa os middlewares
const Auth = require('../middlewares/auth');
const auth = new Auth();

//importa os controladores
const indicadores = require('../controllers/indicadores')

/** @param { import('express').Express} app */

//Definição das rotas
module.exports = app => {
    //app.get('/indicadores', auth.verify, auth.isMaster, indicadores.getData)
    app.get('/indicadores', auth.verify, indicadores.getData)
}