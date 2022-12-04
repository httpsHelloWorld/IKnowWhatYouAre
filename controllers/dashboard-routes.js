const router = requre('express').Router();

const sequelize = require('../configure/connection');

const { Resource } = require('../models');

const withAuth = require('../utils/auth');



module.exports = router;