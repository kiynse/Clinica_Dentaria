const express = require('express');
const router = express.Router();
const dentistaController = require('../Controllers/DentistaController');

// Criar um novo dentista
router.post('/', dentistaController.criarDentista);

// Obter todos os dentistas
router.get('/', dentistaController.obterTodosDentistas);

// Obter um dentista pelo ID
router.get('/:id', dentistaController.obterDentistaPorId);

// Atualizar um dentista
router.put('/:id', dentistaController.atualizarDentista);

// Excluir um dentista
router.delete('/:id', dentistaController.excluirDentista);

module.exports = router;
