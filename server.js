const express = require('express');

const path = require('path');

const expresshbs = require('express-handlebars');

const sequelize = require('./configure/connection');

const routes = require('./controllers/index');

const hbs = expresshbs.create({});

const app = express();

const PORT = process.env.PORT || 3000;

const expresssession = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(expresssession.Store);

const session = {
    secret:'secret',
    cookie:{},
    resave:false,
    saveUninitialized:true,
    store: new SequelizeStore({
        db:sequelize,
        checkExpirationInterval:5 * 60 * 1000,
        expiration:5 * 60 * 1000
    })
};

app.use(expresssession(session));

app.use(express.json);

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));

app.use(routes);

app.engine('handlebars',hbs.engine);

app.set('view engine','handlebars');

sequelize.sync({force:false}).then(() => {
    app.listen(PORT,() => console.log(`Now on PORT ${PORT}`))
});