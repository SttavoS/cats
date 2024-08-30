import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import Button from '../../elements/Button/Button';
import Input from '../../elements/Inputs/Input';
import { GET_USER } from '../../../api';
import { UserContext } from '../../../context/UserContext';

const LoginForm = () => {
  const username = useForm('email');
  const password = useForm('email');

  const { login, error, isLoading } = useContext(UserContext);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUser(token);
    }
  }, []);

  const getUser = async token => {
    const { url, options } = GET_USER(token);

    const response = await fetch(url, options);
    const json = response.json();
  };

  const submitLogin = async event => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      login(username.value, password.value);
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={submitLogin}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {isLoading ? (
          <Button type="submit" disabled>
            Carregando...
          </Button>
        ) : (
          <Button type="submit">Entrar</Button>
        )}

        {error && <p>{error}</p>}
      </form>
      <Link to="/login/criar">Criar conta</Link>
    </section>
  );
};

export default LoginForm;
