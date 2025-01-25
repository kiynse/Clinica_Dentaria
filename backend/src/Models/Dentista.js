const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');
const bcrypt = require('bcryptjs');

const Dentista = sequelize.define('Dentista', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    especialidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nif: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    numeroContato: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Dentista.beforeSave(async (Dentista, options) => {
    if (Dentista.senha) {
        Dentista.senha = await bcrypt.hash(Dentista.senha, 10);  // Encripta a senha
    }
  });

module.exports = Dentista;
