import AuthPage from '../AuthPage/AuthPage';
import loginPageContent from '../../utils/loginPageContent';

function Login() {
  return (
    <AuthPage isRegisterPage={false} staticContent={loginPageContent} />
  );
}

export default Login;
