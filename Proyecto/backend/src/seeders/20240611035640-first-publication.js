'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Publications', [{
      madeByUser: 'admin',
      madeToUser: 'merror',
      text: 'Hello, first publication!',
      image: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Publications', {
      text: 'Hello, first publication!'
    });
  }
};
