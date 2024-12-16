'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    static associate(models) {
      Mahasiswa.hasMany(models.TugasAkhir, {
        foreignKey: 'id_mahasiswa',
        as: 'tugas_akhirs',
      });
    }
  }
  Mahasiswa.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nim: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      jenis_kelamin: {
        type: DataTypes.ENUM('Laki-Laki', 'Perempuan'), // Gender options
        allowNull: false,
      },
      foto: {
        type: DataTypes.STRING, // Assuming this is a URL or file path to the image
        allowNull: true, // Optional field
      },
    },
    {
      sequelize,
      modelName: 'Mahasiswa',
      tableName: 'mahasiswas', // Use pluralized form for table names
      timestamps: false, // Disable timestamps if not required
    }
  );
  return Mahasiswa;
};