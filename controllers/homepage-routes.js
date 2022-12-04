const router = require('express').Router();

const sequelize = require('../configure/connection');

router.get('/',(req,res) => (
    res.render('home')
));