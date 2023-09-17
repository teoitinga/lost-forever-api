const user = require('../controllers/user-controller')
/** @param { import('express').Express} app */


module.exports = app => {
    app.post('/login', user.login)
}