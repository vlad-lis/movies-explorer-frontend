import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import useFormWithValidation from '../../hooks/useFormWIthValidation';

function AuthPage({
  isRegisterPage, staticContent, onSubmit, submitError,
}) {
  const {
    greeting, nameLabel, namePlaceholder, emailLabel, emailPlaceholder,
    passwordLabel, passwordPlaceholder, submitBtn, redirectPrompt, redirectLink,
  } = staticContent;

  const {
    values, handleChange, errors, isValid, resetForm,
  } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    if (isRegisterPage) {
      onSubmit(values.email, values.password, values.name);
      resetForm();
    }

    if (!isRegisterPage) {
      onSubmit(values.email, values.password);
    }
  }

  return (
    <main className='auth-content'>
      <section className='auth'>
        <div className='auth__logo-container'>
          <Logo />
        </div>
        <h2 className='auth__greeting'>{greeting}</h2>
        <form className='auth__form' onSubmit={handleSubmit}>
          {isRegisterPage
            && <fieldset className='auth__fieldset'>
              <label className='auth__label'>{nameLabel}</label>
              <input className='auth__input'
                placeholder={namePlaceholder}
                name='name'
                onChange={handleChange}
                value={values.name || ''}
                required
                pattern="[A-Za-z\u0400-\u04FF -]*"
                minLength={2}
                maxLength={30} />
              <span className='auth__error auth__error_extra-margin'>{errors.name}</span>
            </fieldset>}
          <fieldset className='auth__fieldset'>
            <label className='auth__label'>{emailLabel}</label>
            <input className='auth__input'
              placeholder={emailPlaceholder}
              name='email'
              onChange={handleChange}
              value={values.email || ''}
              required
              pattern='^[a-z0-9-_.]+?@[a-z0-9-_.]+\.[a-z]+' />
            <span className='auth__error auth__error_extra-margin'>{errors.email}</span>
          </fieldset>
          <fieldset className='auth__fieldset'>
            <label className='auth__label'>{passwordLabel}</label>
            <input className={`auth__input ${submitError && 'auth__input_red'}}`} placeholder={passwordPlaceholder}
              type='password'
              name='password'
              onChange={handleChange}
              value={values.password || ''}
              required
              minLength={5} />
            <span className='auth__error auth__erorr_extra-padding'>
              {errors.password ? errors.password : submitError}
            </span>
          </fieldset>
          <button
            className={`auth__submit-btn ${!isRegisterPage && 'auth__submit-btn_extra-margin'} ${!isValid && 'auth__submit-btn_disabled'}`}
            type='submit'
            disabled={!isValid}>
            {submitBtn}
          </button>
        </form>
        <div className='auth__redirect-container'>
          <p className='auth__redirect-text'>{redirectPrompt}</p>
          <Link to={isRegisterPage ? '/signin' : '/signup'}
            className='auth__redirect-text auth__redirect-link'>{redirectLink}</Link>
        </div>
      </section>
    </main>
  );
}

AuthPage.propTypes = {
  staticContent: PropTypes.shape({
    greeting: PropTypes.string.isRequired,
    nameLabel: PropTypes.string,
    namePlaceholder: PropTypes.string,
    emailLabel: PropTypes.string.isRequired,
    emailPlaceholder: PropTypes.string.isRequired,
    passwordLabel: PropTypes.string.isRequired,
    passwordPlaceholder: PropTypes.string.isRequired,
    defaultError: PropTypes.string,
    submitBtn: PropTypes.string.isRequired,
    redirectPrompt: PropTypes.string.isRequired,
    redirectLink: PropTypes.string.isRequired,
  }),
  isRegisterPage: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func,
  submitError: PropTypes.string,
};

export default AuthPage;
