import { Route, Routes } from 'react-router-dom';
import LoginForm from '../components/account/LoginForm';
import CreateAccountForm from '../components/account/CreateAccountForm';
import RecoverPasswordForm from '../components/account/RecoverPasswordForm';
import ResetPasswordForm from '../components/account/ResetPasswordForm';

const Login = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="criar" element={<CreateAccountForm />} />
      <Route path="recuperar" element={<RecoverPasswordForm />} />
      <Route path="resetar" element={<ResetPasswordForm />} />
    </Routes>
  );
};

export default Login;
