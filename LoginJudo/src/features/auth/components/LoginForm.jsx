import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';


const LoginForm = () => {
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState(''); 
  const { login, isLoading, error } = useAuth();  

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    await login({ email, password });  
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
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="usuario@ejemplo.com"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Tu contraseña"
          />
        </div>
        
        
        <button type="submit" disabled={isLoading} className="login-button">
          {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
        
        <div className="login-info">
          <p>Para pruebas usar:</p>
          <p>Email: maria@mail.com</p>
          <p>Contraseña: 12345</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;