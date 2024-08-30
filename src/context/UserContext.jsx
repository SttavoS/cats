import { createContext, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from '../api';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const logout = useCallback(() => {
    setData(null);
    setError(null);
    setIsLoading(false);
    setIsLogged(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  const getUser = async token => {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = response.json();
    setData(json);
    setIsLogged(true);
  };

  const login = async (username, password) => {
    try {
      setError(null);
      setIsLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Erro: ${response.statusText}`);
      }
      const { token } = await response.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/conta');
      setIsLogged(true);
    } catch (error) {
      setError(error.message);
      setIsLogged(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const login = async () => {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setIsLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error('Token inválid');
          }

          await getUser(token);
        } catch (error) {
          logout();
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    };

    login();
  }, [logout]);

  return (
    <UserContext.Provider value={{ login, logout, data, isLogged, isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
};
