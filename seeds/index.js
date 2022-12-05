const userSeeds = require('./user-seeds');

const roleSeeds = require('./role-seeds');

const resourceSeeds = require('./resource-seeds');

const sequelize = require('../configure/connection');

const seedAll = async() => {
    await sequelize.sync({
        force:true
    });
    await userSeeds();
    await roleSeeds();
    await resourceSeeds();
};