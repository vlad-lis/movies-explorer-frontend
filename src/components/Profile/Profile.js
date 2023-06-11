import { PropTypes } from 'prop-types';
import { useEffect, useState, useContext } from 'react';
import profileForm from '../../utils/staticContent/profilePageContent';
import useFormWithValidation from '../../hooks/useFormWIthValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({
  onSubmit, onSignout, successfulEditMsg, submitError, isFormDisabled,
}) {
  const currentUser = useContext(CurrentUserContext);
  const {
    values, handleChange, errors, isValid, resetForm,
  } = useFormWithValidation();

  const [userData, setUserData] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const errorMessage = `${errors.name || ''} ${errors.email || ''}`;
  const statusMessage = successfulEditMsg || submitError;
  const [isFormValid, setIsFormValid] = useState(false);

  function handleFormChange(evt) {
    const { name, value } = evt.target;
    handleChange(evt);
    setUserData({
      ...userData, [name]: value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const name = values.name || currentUser.name;
    const email = values.email || currentUser.email;
    onSubmit(name, email);
    resetForm();
  }

  useEffect(() => {
    if ((isValid) && (currentUser.name !== userData.name || currentUser.email !== userData.email)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [userData.name, userData.email]);

  return (
    <main className='profile-content'>
      <section className='profile'>
        <h2 className='profile__greeting'>{profileForm.greeting} {currentUser.name}</h2>
        <form className='profile__form' onSubmit={handleSubmit}>
          <fieldset className='profile__fieldset'>
            <label className='profile__text'>{profileForm.nameLabel}</label>
            <input className='profile__text profile__input'
              name='name'
              value={values.name || currentUser.name}
              onChange={handleFormChange}
              pattern="[A-Za-z\u0400-\u04FF -]*"
              minLength={2}
              maxLength={30} />
          </fieldset>
          <fieldset className='profile__fieldset'>
            <label className='profile__text'>{profileForm.emailLabel}</label>
            <input className='profile__text profile__input'
              name='email'
              value={values.email || currentUser.email}
              onChange={handleFormChange}
              pattern='^[a-z0-9-_.]+?@[a-z0-9-_.]+\.[a-z]+' />
          </fieldset>
          <span className={`profile__error profile__text profile__text_red ${successfulEditMsg && 'profile__text_green'}`}>
            {errorMessage} {statusMessage}
          </span>
          <button
            disabled={!isFormValid || isFormDisabled}
            className={`profile__button profile__button_margin-top ${(!isFormValid || isFormDisabled) && 'profile__button_disabled'}`}
            type='submit'>{profileForm.editBtn}</button>
        </form>
        <button className='profile__button profile__button_red' onClick={onSignout}>{profileForm.exitBtn}</button>
      </section>
    </main>
  );
}

Profile.propTypes = {
  onSubmit: PropTypes.func,
  onSignout: PropTypes.func,
  user: PropTypes.object,
  successfulEditMsg: PropTypes.string,
  submitError: PropTypes.string,
  isFormDisabled: PropTypes.bool,
};

export default Profile;
