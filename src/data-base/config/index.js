require('dotenv').config();
const Sequelize = require('sequelize');

const dbconfig = require('./config.js')[process.env.NODE_ENV];

const connection = new Sequelize(dbconfig);

const User = require('../models/user');
User.init(connection);

module.exports = connection;