'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TugasAkhirs', {
      id_tugas_akhir: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_mahasiswa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Mahasiswas', // Name of the referenced table
          key: 'id', // Name of the primary key in Mahasiswas table
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nama_pembimbing: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      judul: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TugasAkhirs');
  },
};
