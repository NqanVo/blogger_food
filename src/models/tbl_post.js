'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_post extends Model {
    static associate(models) {
      tbl_post.belongsTo(models.tbl_user, { foreignKey: "user_id", targetKey: "id", as: "dataUser" }) //as ten khoa ngoai hoac ten de lay data
      tbl_post.belongsTo(models.tbl_category, { foreignKey: "category_id", targetKey: "id", as: "dataCategory" }) //as ten khoa ngoai hoac ten de lay data
    }
  }
  tbl_post.init({
    post_title: DataTypes.STRING,
    post_desc: DataTypes.STRING,
    post_thumb: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tbl_post',
  });
  return tbl_post;
};