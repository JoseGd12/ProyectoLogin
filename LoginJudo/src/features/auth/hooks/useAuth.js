// src/features/auth/hooks/useAuth.js
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../slices/authThunks';
import { logout } from '../slices/authSlice';
import { selectAuth, selectUser, selectIsAuthenticated, selectIsLoading, selectError } from '../slices/authSelectors';

export const useAuth = () => {
  const dispatch = useDispatch();
  
  // Obtener el estado de autenticación desde Redux
  const auth = useSelector(selectAuth);
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  // Función de inicio de sesión
  const login = async (credentials) => {
    return await dispatch(loginUser(credentials));
  };
  
  // Función de cierre de sesión
  const logoutUser = () => {
    dispatch(logout());
  };
  
  return {
    auth, user, isAuthenticated, isLoading, error,
    login, logout: logoutUser
  };
};