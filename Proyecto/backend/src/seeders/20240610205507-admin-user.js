'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface/*, Sequelize*/) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const hashedPassword = await bcrypt.hash('admin', 10);

    await queryInterface.bulkInsert('Users', [{
      username: 'admin',
      mail: 'admin@example.com',
      password: hashedPassword,
      gender: 'male',
      age: 21,
      description: 'Administrator user',
      photo: '',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface/*, Sequelize*/) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', { username: 'admin' }, {});
  }
};
