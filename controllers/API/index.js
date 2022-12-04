const router = require('express').Router();

const resourceRoutes = require('./resource-routes');

const userRoutes = require('./user-routes');

const roleRoutes = require('./role-routes');

router.use('/link',resourceRoutes);

router.use('/user',userRoutes);