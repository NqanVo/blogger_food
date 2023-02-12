'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      post_title: { allowNull: false, type: Sequelize.STRING },
      post_desc: { allowNull: false, type: Sequelize.STRING },
      post_thumb: { allowNull: false, type: Sequelize.STRING },
      user_id: { allowNull: false, type: Sequelize.INTEGER },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_posts');
  }
};