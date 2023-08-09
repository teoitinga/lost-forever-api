const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();


module.exports = (req, res, next) => {

    const { user, password} = req.body

    if (user == 'luiz' && password == '123') {
            
        const tokenObject = 1; //esse id vvem do banco de dados
        const token = jwt.sign(JSON.stringify({ foo: 'bar' }), process.env.SECRET_KEY )
        
        res.status(200).json(token);

    }else{

        res.status(404).json({ message: 'Login inválido!' });
    }
}