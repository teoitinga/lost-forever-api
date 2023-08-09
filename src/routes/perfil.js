//importa os middlewares
const { verify, isMaster } = require('../middlewares/auth')

//importa os controladores
const indicadores = require('../controllers/indicadores')

/** @param { import('express').Express} app */

//Definição das rotas
module.exports = app => {
    app.get('/indicadores', verify, isMaster, indicadores.getData)
}