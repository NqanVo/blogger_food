"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tbl_category extends Model {
    static associate(models) {
      // Một danh mục có nhiều bài viết
      tbl_category.hasMany(models.tbl_post, {
        foreignKey: "category_id",
        as: "category_posts",
      });
    }
  }
  tbl_category.init(
    {
      category_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tbl_category",
      tableName: "tbl_categories",
    }
  );
  return tbl_category;
};
