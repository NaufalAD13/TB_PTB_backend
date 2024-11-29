'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seminar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relasi dengan tabel TugasAkhir
      Seminar.belongsTo(models.TugasAkhir, {
        foreignKey: 'id_tugas_akhir',
        as: 'tugasAkhir',
      });
    }
  }
  Seminar.init(
    {
      id_seminar: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_tugas_akhir: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'TugasAkhirs', // Nama tabel TugasAkhir (pluralized secara default)
          key: 'id_tugas_akhir',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nama_penguji: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tanggal_seminar: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tempat_seminar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status_seminar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      komentar: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      surat: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Seminar',
      tableName: 'seminars', // Nama tabel (default plural)
      timestamps: false, // Hilangkan timestamps jika tidak diperlukan
    }
  );
  return Seminar;
};
