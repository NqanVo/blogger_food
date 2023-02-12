'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_avatar: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_country: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_isAdmin: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_users');
  }
};