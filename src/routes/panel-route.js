const Auth = require('../middlewares/auth');
const auth = new Auth();

/** @param { import('express').Express} app */
module.exports = app => {
    app.get('/panel', auth.verify, auth.isMaster, (_, res) => {
        res.send('Você foi logado com sucesso!')
    })
}