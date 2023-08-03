'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Band', [
      {
        name: 'Oriole Fugitives',
        genre: 'Indie',
        available_start_time: '2023-08-01 12:00:00+00:00',
        end_time: '2023-08-01 12:01:00+00:00'
      },
      {
        name: 'The Codfish Optimist',
        genre: 'Alternative',
        available_start_time: '2023-08-01 12:00:10+00:00',
        end_time: '2023-08-01 12:00:10+00:00'
      },
      {
        name: 'Exploiter Impedance',
        genre: 'Pop',
        available_start_time: '2023-08-01 12:00:00+40:00',
        end_time: '2023-08-01 12:00:00+50:00'
      },
      {
        name: 'The Underdone',
        genre: 'Rock',
        available_start_time: '2023-08-01 12:00:50+00:00',
        end_time: '2023-08-01 12:00:30+00:00'
      },
      {
        name: 'Ague Tertiary',
        genre: 'Indie',
        available_start_time: '2023-08-01 12:00:05+00:00',
        end_time: '2023-08-01 12:00:00+00:040'
      },
      {
        name: 'The Bystander Mistakes',
        genre: 'Alternative',
        available_start_time: '2023-08-01 12:00:08+00:00',
        end_time: '2023-08-01 12:00:06+00:00'
      },
      {
        name: 'Collide Applicant',
        genre: 'Oldies',
        available_start_time: '2023-08-01 12:00:04+00:00',
        end_time: '2023-08-01 12:00:30+00:00'
      },
      {
        name: 'Apricot Symptoms',
        genre: 'Metal',
        available_start_time: '2023-08-01 12:00:02+00:00',
        end_time: '2023-08-01 12:00:10+00:00'
      },
      {
        name: 'Olden Fearless',
        genre: 'Metal',
        available_start_time: '2023-08-01 12:00:60+00:00',
        end_time: '2023-08-01 12:00:00+50:00'
      },
      {
        name: 'Rhymes Of',
        genre: 'Folk',
        available_start_time: '2023-08-01 12:00:00+70:00',
        end_time: '2023-08-01 12:00:00+80:00'
      },
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Band', null, {})
  }
};