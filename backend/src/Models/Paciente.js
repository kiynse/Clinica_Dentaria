const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');


const Paciente = sequelize.define('Paciente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endereco: {
        type: DataTypes.STRING,
    },
    dataNascimento: {
        type: DataTypes.DATEONLY,
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


module.exports = Paciente;
