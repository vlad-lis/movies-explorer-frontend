import PropTypes from 'prop-types';
import AuthPage from '../AuthPage/AuthPage';
import registerPageContent from '../../utils/staticContent/registerPageContent';

function Register({ onSubmit, submitError }) {
  return (
    <AuthPage isRegisterPage={true}
      staticContent={registerPageContent}
      onSubmit={onSubmit}
      submitError={submitError} />
  );
}

Register.propTypes = {
  onSubmit: PropTypes.func,
  submitError: PropTypes.string,
};

export default Register;
