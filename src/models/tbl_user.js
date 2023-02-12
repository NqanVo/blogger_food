'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_user extends Model {
    static associate(models) {
    }
  }
  tbl_user.init({
    user_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_password: DataTypes.STRING,
    user_avatar: DataTypes.STRING,
    user_country: DataTypes.STRING,
    user_isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tbl_user',
  });
  return tbl_user;
};