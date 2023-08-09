require('dotenv').config();

const Sequelize = require('sequelize');

const dbconfig = require('../config/config')[process.env.NODE_ENV];

const connection = new Sequelize(dbconfig);

const User = require('./persona-model');
User.init(connection, { timestamps: false });

module.exports = connection;