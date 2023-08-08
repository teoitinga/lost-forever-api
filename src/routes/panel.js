const auth = require('../middlewares/auth')

/** @param { import('express').Express} app */
module.exports = app => {
    app.get('/panel', auth, (_, res) => {
        res.send('Você foi logado com sucesso!')
    })
}