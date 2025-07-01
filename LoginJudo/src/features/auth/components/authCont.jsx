import { useAuth } from '../hooks/useAuth';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const AuthContainer = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Dashboard /> : <LoginForm />;
};

export default AuthContainer;