const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');

const Tratamento = sequelize.define('Tratamento', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    descricao: {
        type: DataTypes.TEXT,
    },
    duracaoEstimada: {
        type: DataTypes.INTEGER, // duração em minutos
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
    },
});

module.exports = Tratamento;
