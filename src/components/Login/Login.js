import PropTypes from 'prop-types';
import AuthPage from '../AuthPage/AuthPage';
import loginPageContent from '../../utils/staticContent/loginPageContent';

function Login({ onSubmit }) {
  return (
    <AuthPage isRegisterPage={false} staticContent={loginPageContent} onSubmit={onSubmit} />
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func,
  submitError: PropTypes.string,
};

export default Login;
