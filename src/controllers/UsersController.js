const prisma = require('../database/prisma');

class UsersController {
  async create(req, res) {
    try {
      const { name, email } = req.body;
      const user = await prisma.user.create({ data: { name, email } });
      return res.status(201).json(user);
    } catch (err) {
      return res.status(409).json({ error: 'Erro ao criar usuário' });
    }
  }

  async show(req, res) {
    try {
      const users = await prisma.user.findMany();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(409).json({ error: 'Erro ao listar usuários' });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const updated = await prisma.user.update({ where: { id }, data: { name, email } });
      return res.status(200).json(updated);
    } catch (err) {
      return res.status(409).json({ error: 'Erro ao atualizar usuário' });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await prisma.user.delete({ where: { id } });
      return res.status(200).send();
    } catch (err) {
      return res.status(409).json({ error: 'Erro ao remover usuário' });
    }
  }
}

module.exports = UsersController;
