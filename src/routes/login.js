const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

/** @param { import('express').Express} app */

const auth = require('../middlewares/auth')

/** @param { import('express').Express} app */
/*
module.exports = app => {
    app.get('/login', auth, (_, res) => {
        res.send('Você foi logado com sucesso!')
    })
}
*/
module.exports = app => {
    app.get('/login', (req, res) => {
        if (req.body.user === 'luiz' && req.body.password === '123') {
            
            const tokenObject = 1; //esse id vvem do banco de dados
            const token = jwt.sign(JSON.stringify({ foo: 'bar' }), process.env.SECRET_KEY )
            res.status(200).json({ message: token });
        }
        res.status(500).json({ message: 'Login inválido!' });

    })

}