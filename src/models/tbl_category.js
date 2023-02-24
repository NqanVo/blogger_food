'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_category extends Model {
    static associate(models) {
    }
  }
  tbl_category.init({
    category_name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'tbl_category',
  });
  return tbl_category;
};