"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tbl_post extends Model {
    static associate(models) {
      // Một bài viết thuộc về một người dùng
      tbl_post.belongsTo(models.tbl_user, {
        foreignKey: "user_id",
        targetKey: "id",
        as: "dataUser",
      });

      // Một bài viết thuộc về một danh mục
      tbl_post.belongsTo(models.tbl_category, {
        foreignKey: "category_id",
        targetKey: "id",
        as: "dataCategory",
      });
    }
  }
  tbl_post.init(
    {
      post_title: DataTypes.STRING,
      post_desc: DataTypes.TEXT,
      post_thumb: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tbl_post",
      tableName: "tbl_posts",
    }
  );
  return tbl_post;
};
