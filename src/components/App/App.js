import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {
  const [isLoggedIn] = useState(false);

  return (
    <div className="root">
      <Routes>
        <Route path='/' element={
          <>
            <Header isLoggedIn={isLoggedIn} />
            <Main />
            <Footer />
          </>
        } />
        <Route path='/movies' element={
          <>
            <Header isLoggedIn={isLoggedIn} />
            <Movies />
            <Footer />
          </>
        } />
        <Route path='/saved-movies' element={
          <>
            <Header isLoggedIn={isLoggedIn} />
            <SavedMovies />
            <Footer />
          </>
        } />
        <Route path='/profile' element={
          <>
            <Header isLoggedIn={isLoggedIn} />
            <Profile />
          </>
        } />
        <Route path='/signup' element={
          <Register />
        } />
        <Route path='/signin' element={
          <Login />
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
