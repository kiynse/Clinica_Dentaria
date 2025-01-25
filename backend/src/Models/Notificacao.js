const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');
const Paciente = require('./Paciente');
const Dentista = require('./Dentista');

const Notificacao = sequelize.define('Notificacao', {
    tipo: {
        type: DataTypes.STRING,  // Ex: 'agendamento aceito', 'consulta confirmada', 'lembrete'
    },
    mensagem: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,  // 'não lida', 'lida'
        defaultValue: 'não lida',
    }
});

Notificacao.belongsTo(Paciente, { foreignKey: 'pacienteId', as: 'paciente' });
Notificacao.belongsTo(Dentista, { foreignKey: 'dentistaId', as: 'dentista' });

Paciente.hasMany(Notificacao, { foreignKey: 'pacienteId' });
Dentista.hasMany(Notificacao, { foreignKey: 'dentistaId' });

module.exports = Notificacao;
