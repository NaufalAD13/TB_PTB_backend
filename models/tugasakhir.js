'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TugasAkhir extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relasi dengan tabel Mahasiswa
      TugasAkhir.belongsTo(models.Mahasiswa, {
        foreignKey: 'id_mahasiswa',
        as: 'mahasiswa',
      });
    }
  }
  TugasAkhir.init(
    {
      id_tugas_akhir: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_mahasiswa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Mahasiswas', // Nama tabel mahasiswa (pluralized secara default)
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nama_pembimbing: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      judul: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'TugasAkhir',
      tableName: 'tugasakhirs', // Nama tabel (default plural)
      timestamps: false, // Hilangkan timestamps jika tidak diperlukan
    }
  );
  return TugasAkhir;
};
