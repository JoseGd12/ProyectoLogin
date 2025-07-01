import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { 
  validateLoginEmail, 
  validateLoginPassword, 
  isLoginDataValid 
} from '../services/loginValidations';

const LoginForm = () => {
  // Estados originales del login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useAuth();

  // Estados para errores de validación
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  // Validación del formulario
  useEffect(() => {
    const isValid = isLoginDataValid(errors, { email, password });
  }, [errors, email, password]);

  // Manejador de cambios (integra validaciones)
  const handleChange = (e) => {
    const { id, value } = e.target;
    
    // Actualiza estados originales
    if (id === 'email') setEmail(value);
    if (id === 'password') setPassword(value);

    // Validaciones en tiempo real
    switch (id) {
      case 'email':
        setErrors(prev => ({ ...prev, email: validateLoginEmail(value) }));
        break;
      case 'password':
        setErrors(prev => ({ ...prev, password: validateLoginPassword(value) }));
        break;
      default:
        break;
    }
  };

  // Manejador de submit (original + validación final)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Verifica errores antes de enviar
    const emailError = validateLoginEmail(email);
    const passwordError = validateLoginPassword(password);
    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      await login({ email, password });
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange}
            placeholder="usuario@ejemplo.com"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChange}
            placeholder="Tu contraseña"
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        
        <button 
          type="submit" 
          disabled={isLoading} 
          className="login-button"
        >
          {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;