'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Friendships', [{
      user1: 1, 
      user2: 2,
      status: 'pending',
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
    await queryInterface.bulkDelete('Friendships', null, {});
  }
};
