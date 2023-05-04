import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import { headerLinks } from '../../utils/landingContent';

function Header({ isLoggedIn }) {
  return (
    <header className='header'>
      <Link to='/' ><Logo /></Link>
      {
        isLoggedIn ? (
          <nav className='header__nav-menu header__nav-menu_movies'>
            <Link className='header__nav-link header__nav-link_movies' to='/movies' >{headerLinks.movies}</Link>
            <Link className='header__nav-link header__nav-link_movies' to='/saved-movies' >{headerLinks.savedMovies}</Link>
            <Link to='/profile'><button className='header__profile-btn' type='button'>{headerLinks.account}</button></Link>
          </nav>
        ) : (
          <nav className='header__nav-menu'>
            <Link className='header__nav-link' to='/movies' >{headerLinks.register}</Link>
            <Link className='header__nav-link header__nav-link_green' to='/saved-movies' >{headerLinks.login}</Link>
          </nav>
        )
      }
    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Header;
