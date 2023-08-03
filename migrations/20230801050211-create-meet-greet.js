'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Meet_greet', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      band_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      meet_start_time: {
        type: Sequelize.TIME,
        allowNull: false
      },
      meet_end_time: {
        type: Sequelize.TIME,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Meet_greet');
  }
};