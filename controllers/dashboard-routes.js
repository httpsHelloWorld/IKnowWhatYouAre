const router = requre('express').Router();

const sequelize = require('../configure/connection');

const { Resource } = require('../models');

const withAuth = require('../utils/auth');

router.get('/',withAuth,(req,res) => {
    console.log(req.expresssession.admin);
    Resource.findAll(
        {
            attributes:['id','name','description','link']
        }
    )
    .then(resourceDB => {
        console.log(resourceDB);
        const resources = resourceDB.map(resource => resource.get({plain:true}));
        res.render('dashboard',{resources,admin:req.expresssession.admin})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
});

module.exports = router;