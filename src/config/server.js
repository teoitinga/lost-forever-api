require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const routes = require();

const app = express();//(request, response)=>{})
app.use(cors);

//app.use(routes);
  //Importa as configurações de conexão com o banco de dados
  require('../data-base/config');

  // parse application/json
  app.use(bodyParser.json({
    limit: '50mb'
  }));

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(
    express.urlencoded({
      extended: true
    })
  )
module.exports = app;