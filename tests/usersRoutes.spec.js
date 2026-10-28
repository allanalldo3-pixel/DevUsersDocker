import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

describe('Teste de Rotas HTTP: /users com Supertest e Mock do Prisma', () => {
  it('GET /users/show - deve retornar lista de usuários e status 200', async () => {
    // 1. Act: executa a requisição GET
    const response = await request(app).get('/users/show');

    // 2. Assert: valida status HTTP, formato de array e conteúdo
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThanOrEqual(2);
    expect(response.body[0].name).toBe('Allan Silva');
  });

  it('POST /users/create - deve cadastrar novo usuário e retornar status 201', async () => {
    // 1. Arrange: dados do novo usuário
    const novoUsuario = { name: 'João Santos', email: 'joao@unitins.br' };

    // 2. Act: envia requisição POST
    const response = await request(app)
      .post('/users/create')
      .send(novoUsuario);

    // 3. Assert: valida código 201 e dados retornados
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('João Santos');
    expect(response.body.email).toBe('joao@unitins.br');
  });
});
