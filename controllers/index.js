const router = require('express').Router();

const homepageRoutes = require('./homepage-routes');

const dashboardRoutes = require('./dashboard-routes');

const apiRoutes = require('./API');

router.use('/API',apiRoutes);

router.use('/',homepageRoutes);

router.use('/dashboard',dashboardRoutes);