const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');
const Paciente = require('./Paciente');
const Dentista = require('./Dentista');

const Consulta = sequelize.define('Consulta', {
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'pendente', // 'pendente', 'confirmada', 'finalizada'
    },
    tipoConsulta: {
        type: DataTypes.STRING,  // ex: exame, limpeza, etc.
    }
});

Consulta.belongsTo(Paciente, { foreignKey: 'pacienteId', as: 'paciente' });
Consulta.belongsTo(Dentista, { foreignKey: 'dentistaId', as: 'dentista' });

Paciente.hasMany(Consulta, { foreignKey: 'pacienteId' });
Dentista.hasMany(Consulta, { foreignKey: 'dentistaId' });

module.exports = Consulta;
