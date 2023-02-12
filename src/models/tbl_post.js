'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_post extends Model {
    static associate(models) {
      // tbl_post.belongsTo(models.tbl_user, { foreignKey: "fk_user", targetKey: "user_id" })
    }
  }
  tbl_post.init({
    post_title: DataTypes.STRING,
    post_desc: DataTypes.STRING,
    post_thumb: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tbl_post',
  });
  return tbl_post;
};