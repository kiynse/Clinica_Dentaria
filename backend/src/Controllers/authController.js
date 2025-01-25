const Paciente = require('../Models/Paciente');
const Dentista = require('../Models/Dentista');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config');

// Login
exports.login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        let usuario = await Paciente.findOne({ where: { email } });
        if (!usuario) {
            usuario = await Dentista.findOne({ where: { email } });
        }

        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        // Logs para depuração
        console.log('Senha informada no login:', senha);
        console.log('Senha armazenada no banco (hash):', usuario.senha);

        // Verifica se a senha está correta
        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        console.log('Senha válida:', senhaValida);

        if (!senhaValida) {
            return res.status(401).json({ error: 'Senha incorreta' });
        }

        // Gerar o token JWT
        const token = jwt.sign({ id: usuario.id, role: usuario.tipo }, config.jwtSecret, { expiresIn: '1h' });

        // Enviar o token como resposta
        res.json({ message: 'Login realizado com sucesso', token, role: usuario.tipo, id: usuario.id });
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ error: error.message });
    }
};

