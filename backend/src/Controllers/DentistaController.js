const Dentista = require('../Models/Dentista');
const bcrypt = require('bcryptjs');

// Criar um novo dentista
const criarDentista = async (req, res) => {
  try {
    const { nome, especialidade, nif, numeroContato, email, senha } = req.body;
    
    // Criptografando a senha antes de salvar
    const senhaCriptografada = await bcrypt.hash(senha, 10);
    
    const novoDentista = await Dentista.create({
      nome,
      especialidade,
      nif,
      numeroContato,
      email,
      senha: senhaCriptografada,  // Salva a senha criptografada
    });
    
    res.status(201).json(novoDentista);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar dentista.' });
  }
};

// Obter todos os dentistas
const obterTodosDentistas = async (req, res) => {
  try {
    const dentistas = await Dentista.findAll();
    res.status(200).json(dentistas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter dentistas.' });
  }
};

// Obter um dentista pelo ID
const obterDentistaPorId = async (req, res) => {
  try {
    const dentista = await Dentista.findByPk(req.params.id);
    if (dentista) {
      res.status(200).json(dentista);
    } else {
      res.status(404).json({ message: 'Dentista não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter dentista.' });
  }
};

// Atualizar dados de um dentista
const atualizarDentista = async (req, res) => {
  try {
    const dentista = await Dentista.findByPk(req.params.id);
    if (dentista) {
      const { nome, especialidade, nif, numeroContato, email, senha } = req.body;
      dentista.nome = nome || dentista.nome;
      dentista.especialidade = especialidade || dentista.especialidade;
      dentista.nif = nif || dentista.nif;
      dentista.numeroContato = numeroContato || dentista.numeroContato;
      dentista.email = email || dentista.email;
      
      // Se houver uma nova senha, criptografa e atualiza
      if (senha) {
        dentista.senha = await bcrypt.hash(senha, 10);  // Criptografa a nova senha
      }

      await dentista.save();
      res.status(200).json(dentista);
    } else {
      res.status(404).json({ message: 'Dentista não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar dentista.' });
  }
};

// Excluir um dentista
const excluirDentista = async (req, res) => {
  try {
    const dentista = await Dentista.findByPk(req.params.id);
    if (dentista) {
      await dentista.destroy();
      res.status(200).json({ message: 'Dentista excluído com sucesso.' });
    } else {
      res.status(404).json({ message: 'Dentista não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao excluir dentista.' });
  }
};

module.exports = {
  criarDentista,
  obterTodosDentistas,
  obterDentistaPorId,
  atualizarDentista,
  excluirDentista,
};
