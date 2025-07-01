export const validateLoginEmail = (email) => {
  if (!email) return 'El email es obligatorio';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Formato de email inválido';
  return '';
};

export const validateLoginPassword = (password) => {
  if (!password) return 'La contraseña es obligatoria';
  if (password.length < 5) return 'Mínimo 5 caracteres';
  if (password.length > 30) return 'Máximo 30 caracteres';
  return '';
};

export const isLoginDataValid = (errors, { email, password }) => {
  return (
    errors.email === '' && 
    errors.password === '' && 
    email.trim() !== '' && 
    password.trim() !== ''
  );
};