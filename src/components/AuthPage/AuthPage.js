import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

function AuthPage({ isRegisterPage, staticContent }) {
  const {
    greeting, nameLabel, namePlaceholder, emailLabel, emailPlaceholder,
    passwordLabel, passwordPlaceholder, submitBtn, redirectPrompt, redirectLink,
  } = staticContent;

  return (
    <main className='auth-content'>
      <section className='auth'>
        <div className='auth__logo-container'>
          <Logo />
        </div>
        <h2 className='auth__greeting'>{greeting}</h2>
        <form className='auth__form'>
          {isRegisterPage
            && <fieldset className='auth__fieldset'>
              <label className='auth__label'>{nameLabel}</label>
              <input className='auth__input' placeholder={namePlaceholder} />
              <span className='auth__error auth__error_extra-margin'></span>
            </fieldset>}
          <fieldset className='auth__fieldset'>
            <label className='auth__label'>{emailLabel}</label>
            <input className='auth__input' placeholder={emailPlaceholder} />
            <span className='auth__error auth__error_extra-margin'></span>
          </fieldset>
          <fieldset className='auth__fieldset'>
            <label className='auth__label'>{passwordLabel}</label>
            <input className='auth__input' placeholder={passwordPlaceholder} type='password' />
            <span className='auth__error auth__erorr_extra-padding'></span>
          </fieldset>
          <button className='auth__submit-btn'>{submitBtn}</button>
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
};

export default AuthPage;
