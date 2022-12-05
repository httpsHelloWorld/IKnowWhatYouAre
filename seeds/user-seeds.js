const {User} = require('../models');

const userData = [
    {
        email:'userone@useronemail.come',
        password:'passwordone',
        role_id:1
    },
    {
        email:'usertwo@usertwomail.com',
        password:'passwordtwo',
        role_id:2
    },
    {
        email:'userthree@userthreemail.com',
        password:'passwordthree',
        role_id:2
    }
];

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;