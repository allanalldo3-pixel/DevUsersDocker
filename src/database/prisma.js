const { PrismaClient } = require('@prisma/client');

let prisma;

if (process.env.NODE_ENV === 'test') {
  // Banco de dados simulado em memória (Mock) para execução de testes unitários e de integração
  const usersTable = [
    { id: 'uuid-1', name: 'Allan Silva', email: 'allan@unitins.br' },
    { id: 'uuid-2', name: 'Professor Bruno', email: 'bruno@unitins.br' },
  ];

  prisma = {
    user: {
      findMany: async () => usersTable,
      create: async ({ data }) => {
        const newUser = { id: 'uuid-123', ...data };
        usersTable.push(newUser);
        return newUser;
      },
      update: async ({ where, data }) => ({ id: where.id, ...data }),
      delete: async () => ({}),
    },
  };
} else {
  prisma = new PrismaClient();
}

module.exports = prisma;
