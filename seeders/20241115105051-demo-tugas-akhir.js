'use strict';

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TugasAkhirs', [
      {
        id_mahasiswa: 1, // Refers to John Doe (id = 1 in Mahasiswas)
        nama_pembimbing: 'Dwi Welly Sukma Nirad',
        judul: 'Analisis Pembelian dan Visualisasi Prediksi Penjualan PT.XYZ',
        status: 'menunggu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_mahasiswa: 2, // Refers to Jane Smith (id = 2 in Mahasiswas)
        nama_pembimbing: 'Husnil Kamil',
        judul: 'Artificial Intelligence in Healthcare',
        status: 'menunggu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_mahasiswa: 3, // Refers to Alice Johnson (id = 3 in Mahasiswas)
        nama_pembimbing: 'Surya Afnarius',
        judul: 'Blockchain Technology for Secure Transactions',
        status: 'menunggu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TugasAkhirs', null, {});
  },
};
