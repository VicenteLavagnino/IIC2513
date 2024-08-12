'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{
      username: 'antonio',
      createdAt: new Date(),
      updatedAt: new Date()
      },

      {
        username: 'ossa',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        username: 'vicente',
        createdAt: new Date(),
        updatedAt: new Date()
      }

     ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
