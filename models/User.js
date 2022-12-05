const {Model,DataTypes} = require('sequelize');

const sequelize = require('../configure/connection');

const bcrypt = require('bcrypt');

class User extends Model{
    checkPassword(loginPassword){
        return bcrypt.compareSync(loginPassword,this.password);
    }
};