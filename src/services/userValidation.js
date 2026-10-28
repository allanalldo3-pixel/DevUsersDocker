/**
 * Função utilitária de validação de dados de usuário (Regra de Negócio)
 */
function validateUserData(data) {
  if (!data) {
    return { valid: false, error: 'Dados do usuário não fornecidos.' };
  }

  const { name, email } = data;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return { valid: false, error: 'O nome é obrigatório.' };
  }

  if (!email || typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
    return { valid: false, error: 'E-mail informado é inválido.' };
  }

  return { valid: true };
}

module.exports = { validateUserData };
