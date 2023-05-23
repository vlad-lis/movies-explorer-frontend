import PropTypes from 'prop-types';
import AuthPage from '../AuthPage/AuthPage';
import loginPageContent from '../../utils/staticContent/loginPageContent';

function Login({ onSubmit, isFormDisabled }) {
  return (
    <AuthPage isRegisterPage={false} staticContent={loginPageContent} onSubmit={onSubmit} isFormDisabled={isFormDisabled} />
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func,
  submitError: PropTypes.string,
  isFormDisabled: PropTypes.bool,
};

export default Login;
