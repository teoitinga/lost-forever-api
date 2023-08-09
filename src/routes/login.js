const auth = require('../middlewares/auth')

/** @param { import('express').Express} app */


module.exports = app => {
    app.get('/login', auth, (req, res) => {})
}