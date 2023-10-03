"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tbl_user extends Model {
    static associate(models) {
      // Một người dùng có nhiều bài viết
      tbl_user.hasMany(models.tbl_post, {
        foreignKey: "user_id",
        as: "user_posts",
      });
    }
  }
  tbl_user.init(
    {
      user_name: DataTypes.STRING,
      user_email: DataTypes.STRING,
      user_password: DataTypes.STRING,
      user_avatar: DataTypes.STRING,
      user_country: DataTypes.STRING,
      user_isAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "tbl_user",
      tableName: "tbl_users",
    }
  );
  return tbl_user;
};
