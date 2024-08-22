import { Route, Routes } from 'react-router-dom';
import LoginForm from '../components/layouts/account/LoginForm';
import CreateAccountForm from '../components/layouts/account/CreateAccountForm';
import RecoverPasswordForm from '../components/layouts/account/RecoverPasswordForm';
import ResetPasswordForm from '../components/layouts/account/ResetPasswordForm';

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
