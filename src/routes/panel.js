const { verify, isMaster } = require('../middlewares/auth')

/** @param { import('express').Express} app */
module.exports = app => {
    app.get('/panel', verify, isMaster, (_, res) => {
        res.send('Você foi logado com sucesso!')
    })
}