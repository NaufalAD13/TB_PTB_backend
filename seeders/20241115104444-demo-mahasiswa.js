'use strict';

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Mahasiswas', [
      {
        id: 1,
        nama: 'Naufal Adli Dhiaurrahman',
        nim: '2211521008',
        jenis_kelamin: "Laki-Laki",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        nama: 'Muhammad Dani Noar',
        nim: '2211522037',
        jenis_kelamin: "Laki-Laki",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        nama: 'Raidan Malik Sandra',
        nim: '2011523007',
        jenis_kelamin: "Laki-Laki",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Mahasiswas', null, {});
  },
};
