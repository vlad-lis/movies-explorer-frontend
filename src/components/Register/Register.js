import PropTypes from 'prop-types';
import AuthPage from '../AuthPage/AuthPage';
import registerPageContent from '../../utils/staticContent/registerPageContent';

function Register({ onSubmit, submitError, isFormDisabled }) {
  return (
    <AuthPage isRegisterPage={true}
      staticContent={registerPageContent}
      onSubmit={onSubmit}
      submitError={submitError}
      isFormDisabled={isFormDisabled} />
  );
}

Register.propTypes = {
  onSubmit: PropTypes.func,
  submitError: PropTypes.string,
  isFormDisabled: PropTypes.bool,
};

export default Register;
