 const router = require('express').Router();
 const {User,Role} = require('../../models');
const { use } = require('../homepage-routes');

 router.get('/',(req,res) => {
    User.findAll({
        attributes:{
            exclude:['password','role_id']
        }
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
 });

 router.get('/:id',(req,res) => {
    User.findOne({
        attributes:{
            exclude:['password']
        },
        where:{
            id:req.params.id
        },
        include:[{
            model:Role,
            attributes:['name']
        }]
    })
    .then(userData => {
        if(!userData){
            res.status(404).json({
                message:'No user associated with ID.'
            });
            return
        };
        res.json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
 });

 router.post('/',(req,res) => {
    User.create({
        email:req.body.email,
        password:req.body.password,
        role_id:req.body.role_id
    })
    .then(userDB => {
        req.expresssession.save(() => {
            req.expresssession.email = userDB.email;
            req.expresssession.loggedIn = true;
            req.expresssession.role_id = userDB.role_id;
            res.json(userDB)
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
 });

 router.post('/login',(req,res) => {
    User.findOne({
        where:{
            email:req.body.email
        }
    })
    .then(userDB => {
        if(!userDB){
            res.status(400).json({
                message:'No user associated with ID.'
            });
            return
        };
        const validPassword = userDB.checkPassword(req.body.password);
        if(!validPassword){
            res.status(400).json({
                message:'Wrong password!'
            });
            return
        };
        if(userDB.role_id === 1){
            req.expresssession.save(() => {
                req.expresssession.email = userDB.email;
                req.expresssession.loggedIn = true;
                req.expresssession.role_id = userDB.role_id;
                req.expresssession.admin = true;
                res.json({
                    user:userDB,
                    message:'Logged in!'
                })
            })
        } else{
            req.expresssession.save(() => {
                req.expresssession.email = userDB.email;
                req.expresssession.loggedIn = true;
                req.expresssession.role_id = userDB.role_id;
                req.expresssession.admin = false;
                res.json({
                    user:userDB,
                    message:'Logged in!'
                })
            })
        }
    })
 });

 router.post('/logout',(req,res) => {
    if(req.expresssession.loggedIn){
        req.expresssession.destroy(() => {
            res.status(204).end()
        })
    } else{
        res.stuatus(404).end();
    }
 });

 router.delete('/:id',(req,res) => {
    User.delete({
        where:{
            id:req.params.id
        }
    })
    .then(userDB => {
        if(!userDB){
            res.status(400).json({
                message:'No user associated with ID.'
            });
            return
        };
        res.json(userDB)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
 });

 module.exports = router;