'use strict';

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Mahasiswas', [
      {
        nama: 'Naufal Adli Dhiaurrahman',
        nim: '2211521008',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: 'Muhammad Dani Noar',
        nim: '2211522037',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: 'Raidan Malik Sandra',
        nim: '2011523007',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Mahasiswas', null, {});
  },
};
