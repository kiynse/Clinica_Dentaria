const express = require('express');
const router = express.Router();
const PacienteController = require('../Controllers/PacienteController');
const { checkToken } = require('../Middleware/authMiddleware');

// Rota para criar um paciente
router.post('/', PacienteController.criarPaciente);

// Rota para listar pacientes
router.get('/', PacienteController.listarPacientes);

// Rota para atualizar um paciente
router.put('/:id', PacienteController.atualizarPaciente);

// Rota para deletar um paciente
router.delete('/:id', PacienteController.deletarPaciente);


module.exports = router;
