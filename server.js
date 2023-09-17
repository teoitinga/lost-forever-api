require('express-async-errors');
require('dotenv').config()

const express = require('express')
const consign = require('consign')
const app = express()

app.disable('x-powered-by')

consign({
    cwd: 'src',
    verbose: process.env.APP_DEBUG === 'true' || false,
    locale: 'pt-br'
}).include('./middlewares/globals').then('./routes').into(app);

/**
 * Gerenciamento de erros
 */
app.use((err, req, res, next)=>{

    console.error(err.stack);
    res.status(err.status || 500).json(err.message)


})

app.listen(process.env.APP_PORT, () => {

    console.log(`Server listening on port ${process.env.APP_PORT}`)

})

module.exports = app