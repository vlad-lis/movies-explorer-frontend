import { navLinks } from '../../utils/landingContent';

function ProfileButton() {
  return (
    <button className='profile-btn' type='button'>{navLinks.account}</button>
  );
}

export default ProfileButton;
