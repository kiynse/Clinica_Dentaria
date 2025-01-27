const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');
const Paciente = require('./Paciente');
const Dentista = require('./Dentista');
const Tratamento = require('./Tratamento');

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
});

Consulta.belongsTo(Paciente, { foreignKey: 'pacienteId', as: 'paciente' });
Consulta.belongsTo(Dentista, { foreignKey: 'dentistaId', as: 'dentista' });
Consulta.belongsTo(Tratamento, { foreignKey: 'tratamentoId', as: 'tratamento' });

Paciente.hasMany(Consulta, { foreignKey: 'pacienteId' });
Dentista.hasMany(Consulta, { foreignKey: 'dentistaId' });
Tratamento.hasMany(Consulta, { foreignKey: 'tratamentoId' });

module.exports = Consulta;
