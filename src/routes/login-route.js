const Auth = require('../middlewares/auth');
const auth = new Auth();
/** @param { import('express').Express} app */


module.exports = app => {
    app.post('/login', auth.authenticate)
}