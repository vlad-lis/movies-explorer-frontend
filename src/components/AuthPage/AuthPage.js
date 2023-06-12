import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Logo from '../Logo/Logo';
import { INPUT_OPTIONS } from '../../utils/constants';

function AuthPage({
  isRegisterPage, staticContent, onSubmit, submitError, isFormDisabled,
}) {
  const {
    greeting, nameLabel, namePlaceholder, emailLabel, emailPlaceholder,
    passwordLabel, passwordPlaceholder, submitBtn, redirectPrompt, redirectLink,
  } = staticContent;

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: 'onChange' });

  function onSubmitForm() {
    const { name, email, password } = userData;

    if (isRegisterPage) {
      onSubmit(email, password, name);
      setUserData({
        name: '',
        email: '',
        password: '',
      });
    }

    if (!isRegisterPage) {
      onSubmit(email, password);
    }
  }

  return (
    <main className='auth-content'>
      <section className='auth'>
        <div className='auth__logo-container'>
          <Logo />
        </div>
        <h2 className='auth__greeting'>{greeting}</h2>
        <form className='auth__form' onSubmit={handleSubmit(onSubmitForm)}>
          {isRegisterPage
            && <fieldset className='auth__fieldset'>
              <label className='auth__label'>{nameLabel}</label>
              <input className='auth__input'
                placeholder={namePlaceholder}
                name='name'
                {...register('name', { ...INPUT_OPTIONS.name, onChange: handleChange })}
                value={userData.name || ''}
                required
                minLength={2}
                maxLength={30} />
              <span className='auth__error auth__error_extra-margin'>{errors.name ? errors.name.message : ''}</span>
            </fieldset>}
          <fieldset className='auth__fieldset'>
            <label className='auth__label'>{emailLabel}</label>
            <input className='auth__input'
              placeholder={emailPlaceholder}
              name='email'
              {...register('email', { ...INPUT_OPTIONS.email, onChange: handleChange })}
              value={userData.email || ''}
              required />
            <span className='auth__error auth__error_extra-margin'>{errors.email ? errors.email.message : ''}</span>
          </fieldset>
          <fieldset className='auth__fieldset'>
            <label className='auth__label'>{passwordLabel}</label>
            <input className={`auth__input ${submitError && 'auth__input_red'}}`} placeholder={passwordPlaceholder}
              type='password'
              name='password'
              {...register('password', { ...INPUT_OPTIONS.password, onChange: handleChange })}
              value={userData.password || ''}
              required
              minLength={5} />
            <span className='auth__error auth__erorr_extra-padding'>
              {errors.password ? errors.password.message : submitError}
            </span>
          </fieldset>
          <button
            className={`auth__submit-btn ${!isRegisterPage && 'auth__submit-btn_extra-margin'} ${(!isValid || !isDirty || isFormDisabled) && 'auth__submit-btn_disabled'}`}
            type='submit'
            disabled={!isValid || !isDirty || isFormDisabled}>
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
  isFormDisabled: PropTypes.bool,
};

export default AuthPage;
