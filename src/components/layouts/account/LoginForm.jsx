import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import Button from '../../elements/Button/Button';
import Input from '../../elements/Inputs/Input';
import { GET_USER, TOKEN_POST } from '../../../api';

const LoginForm = () => {
  const username = useForm('email');
  const password = useForm('email');

  useEffect(() => {
    const token = window.localStorage.getItem('token', json.token);
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
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = response.json();

      getUser(json.token);
      window.localStorage.setItem('token', json.token);
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={submitLogin}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button type="submit">Entrar</Button>
      </form>
      <Link to="/login/criar">Criar conta</Link>
    </section>
  );
};

export default LoginForm;
