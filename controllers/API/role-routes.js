const router = require('express').Router();

const {Role,User} = require('../../models');

router.get('/',(req,res) => {
    Role.findAll({
        attributes:{
            exclude:['name']
        },
        include:[{
            model:User,
            attributes:['email']
        }]
    })
    .then(roleDB => res.json(roleDB))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
});