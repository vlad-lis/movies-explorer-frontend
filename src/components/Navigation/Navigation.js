import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { navLinks } from '../../utils/staticContent/landingContent';
import ProfileButton from '../ProfileButton/ProfileButton';

function Navigation({ isLoggedIn }) {
  const navClass = `nav ${isLoggedIn && 'nav_movies'}`;

  return (
    <nav className={navClass}>
      {
        isLoggedIn ? (
          <>
            <Link className='nav__link nav__link_movies' to='/movies' >{navLinks.movies}</Link>
            <Link className='nav__link nav__link_movies' to='/saved-movies' >{navLinks.savedMovies}</Link>
            <Link className='nav__profile-btn' to='/profile'><ProfileButton /></Link>
          </>
        ) : (
          <>
            <Link className='nav__link' to='/signup' >{navLinks.register}</Link>
            <Link className='nav__link nav__link_green' to='/signin' >{navLinks.login}</Link>
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
