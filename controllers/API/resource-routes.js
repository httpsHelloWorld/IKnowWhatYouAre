const router = require('express').Router();

const {Resource} = require('../../models');

const {sequelize} = require('../../models/User');

const withAuth = require('../../utils/auth');