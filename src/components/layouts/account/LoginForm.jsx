import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import Button from '../../elements/Button/Button';
import Input from '../../elements/Inputs/Input';

const LoginForm = () => {
  const username = useForm('email');
  const password = useForm('email');

  const submitLogin = event => {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(json => console.log(json));
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
