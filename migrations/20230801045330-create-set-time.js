'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Set_time', {
      set_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER,
        allownull: false
      },
      stage_id: {
        type: Sequelize.INTEGER,
        allownull: false
      },
      band_id: {
        type: Sequelize.INTEGER,
        allownull: false
      },
      start_time: {
        type: Sequelize.TIME,
        allownull: false
      },
      end_time: {
        type: Sequelize.TIME,
        allownull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Set_time');
  }
};