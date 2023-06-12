import { PropTypes } from 'prop-types';
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import profileForm from '../../utils/staticContent/profilePageContent';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { INPUT_OPTIONS } from '../../utils/constants';

function Profile({
  onSubmit, onSignout, successfulEditMsg, submitError, isFormDisabled,
}) {
  const currentUser = useContext(CurrentUserContext);

  const [userData, setUserData] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: 'onChange' });
  const submitBtnDisabled = !isDirty || !isValid || isFormDisabled || (userData.name === currentUser.name && userData.email === currentUser.email);
  const errorMessage = `${errors.name ? errors.name.message : ''} ${errors.email ? errors.email.message : ''}`;
  const statusMessage = successfulEditMsg || submitError;

  const onSubmitForm = () => {
    const { name, email } = userData;

    onSubmit(name, email);
  };

  return (
    <main className='profile-content'>
      <section className='profile'>
        <h2 className='profile__greeting'>{profileForm.greeting} {currentUser.name}</h2>
        <form className='profile__form' onSubmit={handleSubmit(onSubmitForm)}>
          <fieldset className='profile__fieldset'>
            <label className='profile__text'>{profileForm.nameLabel}</label>
            <input className='profile__text profile__input'
              name='name'
              defaultValue={userData.name}
              {...register('name', { ...INPUT_OPTIONS.name, onChange: handleChange })} />
          </fieldset>
          <fieldset className='profile__fieldset'>
            <label className='profile__text'>{profileForm.emailLabel}</label>
            <input className='profile__text profile__input'
              name='email'
              defaultValue={userData.email}
              {...register('email', { ...INPUT_OPTIONS.email, onChange: handleChange })} />
          </fieldset>
          <span className={`profile__error profile__text profile__text_red ${successfulEditMsg && 'profile__text_green'}`}>
            {errorMessage} {statusMessage}
          </span>
          <button
            disabled={submitBtnDisabled}
            className={`profile__button profile__button_margin-top ${submitBtnDisabled && 'profile__button_disabled'}`}
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
