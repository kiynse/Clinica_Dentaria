const express = require('express');
const TratamentoController = require('../Controllers/TratamentoController');

const router = express.Router();

// Rotas para tratamentos
router.post('/', TratamentoController.criarTratamento); // Criar tratamento
router.get('/', TratamentoController.listarTratamentos); // Listar todos os tratamentos
router.get('/:id', TratamentoController.buscarTratamentoPorId); // Buscar tratamento por ID
router.put('/:id', TratamentoController.atualizarTratamento); // Atualizar tratamento
router.delete('/:id', TratamentoController.excluirTratamento); // Excluir tratamento

module.exports = router;
