const Tratamento = require('../Models/Tratamento');

const TratamentoController = {
    // Criar um novo tratamento
    async criarTratamento(req, res) {
        try {
            const { nome, descricao, duracaoEstimada, preco } = req.body;

            // Validação simples para evitar duplicatas
            const tratamentoExistente = await Tratamento.findOne({ where: { nome } });
            if (tratamentoExistente) {
                return res.status(400).json({ message: 'Tratamento já existe.' });
            }

            const novoTratamento = await Tratamento.create({ nome, descricao, duracaoEstimada, preco });
            return res.status(201).json(novoTratamento);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao criar tratamento.', error: error.message });
        }
    },

    // Listar todos os tratamentos
    async listarTratamentos(req, res) {
        try {
            const tratamentos = await Tratamento.findAll();
            return res.status(200).json(tratamentos);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao listar tratamentos.', error: error.message });
        }
    },

    // Buscar um tratamento por ID
    async buscarTratamentoPorId(req, res) {
        try {
            const { id } = req.params;
            const tratamento = await Tratamento.findByPk(id);

            if (!tratamento) {
                return res.status(404).json({ message: 'Tratamento não encontrado.' });
            }

            return res.status(200).json(tratamento);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao buscar tratamento.', error: error.message });
        }
    },

    // Atualizar um tratamento
    async atualizarTratamento(req, res) {
        try {
            const { id } = req.params;
            const { nome, descricao, duracaoEstimada, preco } = req.body;

            const tratamento = await Tratamento.findByPk(id);

            if (!tratamento) {
                return res.status(404).json({ message: 'Tratamento não encontrado.' });
            }

            await tratamento.update({ nome, descricao, duracaoEstimada, preco });
            return res.status(200).json(tratamento);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao atualizar tratamento.', error: error.message });
        }
    },

    // Excluir um tratamento
    async excluirTratamento(req, res) {
        try {
            const { id } = req.params;

            const tratamento = await Tratamento.findByPk(id);

            if (!tratamento) {
                return res.status(404).json({ message: 'Tratamento não encontrado.' });
            }

            await tratamento.destroy();
            return res.status(200).json({ message: 'Tratamento excluído com sucesso.' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao excluir tratamento.', error: error.message });
        }
    },
};

module.exports = TratamentoController;
