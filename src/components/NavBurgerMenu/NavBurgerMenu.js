import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileButton from '../ProfileButton/ProfileButton';
import { navLinks } from '../../utils/landingContent';

function NavBurgerMenu({ isOpen, onClose, onOverlayClick }) {
  const linkClass = (navData) => (navData.isActive ? 'burger__link burger__link_active' : 'burger__link');

  return (
    <div className={`burger ${isOpen && 'burger_open'}`} onClick={onOverlayClick}>
      <div className='burger__content'>
        <button className='burger__close-btn' type='button' onClick={onClose} />
        <nav className='burger__nav'>
          <div className='burger__nav-links'>
            <NavLink to='/' className={linkClass} onClick={onClose}>{navLinks.home}</NavLink>
            <NavLink to='/movies' className={linkClass} onClick={onClose}>{navLinks.movies}</NavLink>
            <NavLink to='/saved-movies' className={linkClass} onClick={onClose}>{navLinks.savedMovies}</NavLink>
          </div>
          <NavLink to='/profile' onClick={onClose}><ProfileButton /></NavLink>
        </nav>
      </div>
    </div>
  );
}

NavBurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOverlayClick: PropTypes.func.isRequired,
};

export default NavBurgerMenu;
