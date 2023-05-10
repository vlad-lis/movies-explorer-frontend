import AuthPage from '../AuthPage/AuthPage';
import registerPageContent from '../../utils/registerPageContent';

function Register() {
  return (
    <AuthPage isRegisterPage={true} staticContent={registerPageContent} />
  );
}

export default Register;
