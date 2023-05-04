import profileForm from '../../utils/profilePageContent';

function Profile() {
  return (
    <main className='profile-content'>
      <section className='profile'>
        <h2 className='profile__greeting'>{profileForm.greeting}</h2>
        <form className='profile__form'>
          <fieldset className='profile__fieldset'>
            <label className='profile__text'>{profileForm.nameLabel}</label>
            <input className='profile__text profile__input' placeholder={profileForm.namePlaceholder} />
          </fieldset>
          <fieldset className='profile__fieldset'>
            <label className='profile__text'>{profileForm.emailLabel}</label>
            <input className='profile__text profile__input' placeholder={profileForm.emailPlaceholder} />
          </fieldset>
          <span className='profile__error profile__text profile__text_red'></span>
          <button className='profile__button profile__button_margin-top'>{profileForm.editBtn}</button>
        </form>
        <button className='profile__button profile__button_red'>{profileForm.exitBtn}</button>
      </section>
    </main>
  );
}

export default Profile;
