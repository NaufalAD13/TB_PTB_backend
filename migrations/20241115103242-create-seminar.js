'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seminars', {
      id_seminar: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_tugas_akhir: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'TugasAkhirs', // Nama tabel TugasAkhir (pluralized secara default)
          key: 'id_tugas_akhir',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nama_penguji: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tanggal_seminar: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      tempat_seminar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status_seminar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      komentar: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      surat: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seminars');
  },
};
