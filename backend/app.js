const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./src/Config/database');
const cors = require('cors');

const autenticar = require('./src/Middleware/authMiddleware');

// Importando as models e rotas
const Paciente = require('./src/Models/Paciente');
const Dentista = require('./src/Models/Dentista');
const Agendamento = require('./src/Models/Agendamento');
const Consulta = require('./src/Models/Consulta');
const Notificacao = require('./src/Models/Notificacao');

//Importações das Routes
const pacienteRoutes = require('./src/Routes/PacienteRoutes');
const authRoutes = require('./src/Routes/authRoutes');

// Inicializando dotenv
dotenv.config();

// Inicializando express
const app = express();

// Usando o CORS e o middleware JSON
app.use(cors());
app.use(express.json());

// Conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch((err) => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

// Associando as models
Paciente.hasMany(Agendamento);
Agendamento.belongsTo(Paciente);

Dentista.hasMany(Agendamento);
Agendamento.belongsTo(Dentista);

Consulta.belongsTo(Agendamento);
Agendamento.hasOne(Consulta);

Notificacao.belongsTo(Paciente, { foreignKey: 'pacienteId', allowNull: true });
Notificacao.belongsTo(Dentista, { foreignKey: 'dentistaId', allowNull: true });

// Sincronizando as tabelas
sequelize.sync({ force: true })
  .then(() => {
    console.log('Banco de dados sincronizado!');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar banco de dados:', err);
  });

// Usando as rotas de pacientes
app.use('/pacientes', pacienteRoutes);
app.use('/auth', authRoutes);

// Definindo a porta
const PORT = process.env.PORT || 3000;

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
