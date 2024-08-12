'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Entries', [{
      title: 'Primera Seed Antonio',
      body: 'Este es el body de la primera seed de Antonio',
      date: new Date(),
      belongsTo: 'antonio',
      createdAt: new Date(),
      updatedAt: new Date()
      },

      {
        title: 'Segunda Seed Antonio',
        body: 'Este es el body de la segunda seed de Antonio',
        date: new Date(),
        belongsTo: 'antonio',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Primera Seed Ossa',
        body: 'Este es el body de la primera seed de Ossa',
        date: new Date(),
        belongsTo: 'ossa',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Segunda Seed Ossa',
        body: 'Este es el body de la segunda seed de Ossa',
        date: new Date(),
        belongsTo: 'ossa',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {title: 'Primera Seed Vicente',
      body: 'Este es el body de la primera seed de Vicente',
      date: new Date(),
      belongsTo: 'vicente',
      createdAt: new Date(),
      updatedAt: new Date()
      },

      {
        title: 'Segunda Seed Vicente',
        body: 'Este es el body de la segunda seed de Vicente',
        date: new Date(),
        belongsTo: 'vicente',
        createdAt: new Date(),
        updatedAt: new Date()

      }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Entries', null, {});
  }
};
