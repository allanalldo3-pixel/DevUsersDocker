import { describe, it, expect } from 'vitest';
import { validateUserData } from '../src/services/userValidation.js';

describe('Teste Unitário: Validação de Usuários (userValidation)', () => {
  it('deve aprovar quando nome e e-mail forem válidos', () => {
    // 1. Arrange (Preparar)
    const usuarioValido = { name: 'Allan Silva', email: 'allan@unitins.br' };

    // 2. Act (Agir)
    const resultado = validateUserData(usuarioValido);

    // 3. Assert (Verificar)
    expect(resultado.valid).toBe(true);
    expect(resultado.error).toBeUndefined();
  });

  it('deve rejeitar quando o nome estiver ausente ou vazio', () => {
    // 1. Arrange (Preparar)
    const usuarioSemNome = { name: '   ', email: 'allan@unitins.br' };

    // 2. Act (Agir)
    const resultado = validateUserData(usuarioSemNome);

    // 3. Assert (Verificar)
    expect(resultado.valid).toBe(false);
    expect(resultado.error).toBe('O nome é obrigatório.');
  });

  it('deve rejeitar quando o e-mail não tiver formato válido', () => {
    // 1. Arrange (Preparar)
    const usuarioEmailInvalido = { name: 'Allan Silva', email: 'email-sem-arroba' };

    // 2. Act (Agir)
    const resultado = validateUserData(usuarioEmailInvalido);

    // 3. Assert (Verificar)
    expect(resultado.valid).toBe(false);
    expect(resultado.error).toBe('E-mail informado é inválido.');
  });
});
