const router = require('express').Router();

const {Resource} = require('../../models');

const {sequelize} = require('../../utils/auth');

const withAuth = require('../../utils/auth');