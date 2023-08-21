const { authenticate } = require('../middlewares/auth')

/** @param { import('express').Express} app */


module.exports = app => {
    app.post('/login', authenticate)
}