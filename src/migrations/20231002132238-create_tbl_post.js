"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tbl_posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      post_title: {
        type: Sequelize.STRING,
      },
      post_desc: {
        type: Sequelize.STRING,
      },
      post_thumb: {
        type: Sequelize.STRING,
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "tbl_categories", // Tên bảng tham chiếu
          key: "id", // Tên trường khóa chính của bảng tham chiếu
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "tbl_users", // Tên bảng tham chiếu
          key: "id", // Tên trường khóa chính của bảng tham chiếu
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tbl_posts");
  },
};
