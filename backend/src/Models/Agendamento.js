const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');
const Paciente = require('./Paciente');
const Dentista = require('./Dentista');

const Agendamento = sequelize.define('Agendamento', {
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,  // 'confirmado', 'aguardando', 'rejeitado'
        defaultValue: 'aguardando',
    }
});

Agendamento.belongsTo(Paciente, { foreignKey: 'pacienteId', as: 'paciente' });
Agendamento.belongsTo(Dentista, { foreignKey: 'dentistaId', as: 'dentista' });

Paciente.hasMany(Agendamento, { foreignKey: 'pacienteId' });
Dentista.hasMany(Agendamento, { foreignKey: 'dentistaId' });

module.exports = Agendamento;
