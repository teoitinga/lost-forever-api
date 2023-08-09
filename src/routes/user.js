const User = require('../controllers/user-controller');
const user = new User();

/** @param { import('express').Express} app */


module.exports = app => {
    app.get('/user/:id', user.getUserById)
}