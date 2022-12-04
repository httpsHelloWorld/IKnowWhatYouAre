const router = require('express').Router();

const sequelize = require('../configure/connection');

router.get('/',(req,res) => (
    res.render('home')
));

router.get('/items',(req,res) => (
    res.render('items')
));

router.get('/roles',(req,res) => (
    res.render('roles')
));

router.get('/user-login',(req,res) => {
    if(req.session.loggedIn){
        res.redirect('dashboard');
        return
    };
    res.render(user-login)
});