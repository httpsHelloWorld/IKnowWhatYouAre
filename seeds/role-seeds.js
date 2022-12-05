const {Role} = require('../models');

const roleData = [
    {
        id:1,
        name:'admin'
    },
    {
        id:2,
        name:'miner'
    },
    {
        id:3,
        name:'buyer'
    }
];

const roleSeeds = () => Role.bulkCreate(roleData);

module.exports = roleSeeds;