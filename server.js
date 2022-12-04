const express = require('express');

const path = require('path');

const expresshbs = require('express-handlebars');

const sequelize = require('./configure/connection');

const routes = require('./controllers/index');

const hbs = expresshbs.create({});

const app = express();

const PORT = process.env.PORT || 3000;