import { createContext, useState } from 'react';
import { GET_USER, TOKEN_POST } from '../api';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUser = async token => {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = response.json();
    setData(json);
    setIsLogged(true);
  };

  const userLogin = async (username, password) => {
    const { url, options } = TOKEN_POST({ username, password });
    const response = await fetch(url, options);
    const { token } = await response.json();
    window.localStorage.setItem('token', token);
    getUser(token);
  };

  return (
    <UserContext.Provider value={{ userLogin, data, isLogged, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
