import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { navLinks } from '../../utils/staticContent/landingContent';
import ProfileButton from '../ProfileButton/ProfileButton';

function Navigation({ isLoggedIn }) {
  const navClass = `nav ${isLoggedIn && 'nav_movies'}`;
  const linkClassMovies = (navData) => (navData.isActive ? 'nav__link nav__link_movies nav__link_active' : 'nav__link nav__link_movies');
  const linkClassProfile = (navData) => (navData.isActive ? 'nav__profile-btn nav__profile-btn_active' : 'nav__profile-btn');

  return (
    <nav className={navClass}>
      {
        isLoggedIn ? (
          <>
            <NavLink className={linkClassMovies} to='/movies' >{navLinks.movies}</NavLink>
            <NavLink className={linkClassMovies} to='/saved-movies' >{navLinks.savedMovies}</NavLink>
            <NavLink className={linkClassProfile} to='/profile'><ProfileButton /></NavLink>
          </>
        ) : (
          <>
            <NavLink className='nav__link' to='/signup' >{navLinks.register}</NavLink>
            <NavLink className='nav__link nav__link_green' to='/signin' >{navLinks.login}</NavLink>
          </>
        )
      }
    </nav>
  );
}

Navigation.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Navigation;
