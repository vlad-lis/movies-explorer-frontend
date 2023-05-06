import { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavBurgerMenu from '../NavBurgerMenu/NavBurgerMenu';

function Header({ isLoggedIn }) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function handleBurgerClick() {
    setIsBurgerOpen(true);
  }

  function handleCloseBurger() {
    setIsBurgerOpen(false);
  }

  function handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      setIsBurgerOpen(false);
    }
  }

  return (
    <header className='header'>
      <NavBurgerMenu isOpen={isBurgerOpen}
        onClose={handleCloseBurger}
        onOverlayClick={handleOverlayClick} />
      <Logo />
      {
        isLoggedIn ? (
          <>
            <button className='header__burger-btn' onClick={handleBurgerClick} />
            <div className='header__nav'>
              <Navigation isLoggedIn={isLoggedIn} />
            </div>
          </>
        ) : (
          <div>
            <Navigation isLoggedIn={isLoggedIn} />
          </div>
        )
      }
    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Header;
