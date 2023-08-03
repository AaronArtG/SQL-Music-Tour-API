"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Band", {
      band_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull : true
      },
      genre: {
        type: Sequelize.TEXT,
        allowNull :true
      },
      available_start_time: {
        type: Sequelize.TIME,
        allowNull : true
      },
      end_time: {
        type: Sequelize.TIME,
        allowNull : true
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Band");
  },
};
