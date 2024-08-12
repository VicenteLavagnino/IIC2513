'use strict';
const bcrypt = require('bcrypt');

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

    const hashedPassword = await bcrypt.hash('merror', 10);

    await queryInterface.bulkInsert('Users',[{
      username: 'merror',
      mail: 'merror@example.com',
      password: hashedPassword,
      gender: 'male',
      age: 25,
      description: 'First user',
      photo: '',
      isAdmin: false,
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
    await queryInterface.bulkDelete('Users', { username: 'merror' }, {});
  }
};
