'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Mahasiswas', 'jenis_kelamin', {
      type: Sequelize.ENUM('Laki-Laki', 'Perempuan'),
      allowNull: false,
    });
    await queryInterface.addColumn('Mahasiswas', 'foto', {
      type: Sequelize.STRING,
      allowNull: true, // Allow null in case not every mahasiswa has a photo initially
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Mahasiswas', 'jenis_kelamin');
    await queryInterface.removeColumn('Mahasiswas', 'foto');
  },
};
