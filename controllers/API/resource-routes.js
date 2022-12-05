const router = require('express').Router();

const {Resource} = require('../../models');

const {sequelize} = require('../../models/User');

const withAuth = require('../../utils/auth');

const roleAuth = require('../../utils/role-auth');

router.get('/',withAuth,(req,res) => {
    Resource.findAll()
    .then(resourceDB => res.json(resourceDB))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
});

router.post('/',withAuth,roleAuth,(req,res) => {
    Resource.create({
        name:req.body.name,
        description:req.body.description,
        link:req.body.link
    })
    .then(resourceDB => {
        res.json(resourceDB)
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err)
    })
});