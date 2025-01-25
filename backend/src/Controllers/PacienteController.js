const Paciente = require('../Models/Paciente');  // Importando a model de Paciente
const bcrypt = require('bcryptjs');

// Criar Paciente
const criarPaciente = async (req, res) => {
    const { nome, endereco, dataNascimento, nif, numeroContato, email, senha, tipo } = req.body;

    try {
        // Criptografando a senha
        const senhaCriptografada = await bcrypt.hash(senha, 10); // O "10" define a força do hash

        // Criando o paciente no banco
        const paciente = await Paciente.create({
            nome,
            endereco,
            dataNascimento,
            nif,
            numeroContato,
            email,
            senha: senhaCriptografada, // Armazenando a senha criptografada
            tipo
        });

        res.status(201).json({ mensagem: 'Paciente criado com sucesso!', paciente });
    } catch (err) {
        console.error(err);
        res.status(500).json({ mensagem: 'Erro ao criar paciente', erro: err.message });
    }
};

// Listar Pacientes
const listarPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.status(200).json(pacientes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensagem: 'Erro ao listar pacientes', erro: err.message });
  }
};

// Atualizar Paciente
const atualizarPaciente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, endereco, dataNascimento, nif, numeroContato, email, senha, tipo } = req.body;

    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      return res.status(404).json({ mensagem: 'Paciente não encontrado!' });
    }

    paciente.nome = nome || paciente.nome;
    paciente.endereco = endereco || paciente.endereco;
    paciente.dataNascimento = dataNascimento || paciente.dataNascimento;
    paciente.nif = nif || paciente.nif;
    paciente.numeroContato = numeroContato || paciente.numeroContato;
    paciente.email = email || paciente.email;
    paciente.senha = senha || paciente.senha;
    paciente.tipo = tipo || paciente.tipo;

    await paciente.save();
    res.status(200).json({ mensagem: 'Paciente atualizado com sucesso!', paciente });
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensagem: 'Erro ao atualizar paciente', erro: err.message });
  }
};

// Deletar Paciente
const deletarPaciente = async (req, res) => {
  try {
    const { id } = req.params;
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      return res.status(404).json({ mensagem: 'Paciente não encontrado!' });
    }

    await paciente.destroy();
    res.status(200).json({ mensagem: 'Paciente deletado com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensagem: 'Erro ao deletar paciente', erro: err.message });
  }
};



  

module.exports = {
  criarPaciente,
  listarPacientes,
  atualizarPaciente,
  deletarPaciente,
 
};
