import {
  useState, useEffect, useCallback,
} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import getMovies from '../../utils/MoviesApi';
import { filterArray, filterByThreshold, saveToStorage } from '../../utils/auxiliaryFunctions';
import {
  PROPERTIES_TO_FILTER, DURATION, DURATION_THRESHOLD, SEARCH_ERROR_NO_RESULTS,
  SEARCH_ERROR_API, DEFAULT_ERROR, SUCCESSFUL_EDIT_MESSAGE,
} from '../../utils/constants';
import * as MainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const storedShortsChecked = JSON.parse(localStorage.getItem('shortsChecked'));
  const storedMovies = JSON.parse(localStorage.getItem('filteredMovies'));
  const [isShortsChecked, setIsShortsChecked] = useState(storedShortsChecked || false);
  const [filteredMovies, setFilteredMovies] = useState(storedMovies || []);
  const [previousFilteredMovies, setPreviousFilteredMovies] = useState(storedMovies || []);
  const [searchError, setSearchError] = useState(null);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [successfulEditMsg, setSuccessfulEditMsg] = useState('');
  const navigate = useNavigate();

  // load initial movies array
  const fetchMovies = useCallback(async () => {
    try {
      const response = await getMovies();
      setMovies(response);
    } catch (error) {
      setSearchError(SEARCH_ERROR_API);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, []);

  // filter movies
  function handleSearchSubmit(filterKeyword) {
    setSearchError(null);

    if (filterKeyword.trim() === '') {
      return;
    }

    setIsSearchLoading(true);
    const filtered = filterArray(movies, filterKeyword, PROPERTIES_TO_FILTER);

    if (filtered.length === 0) {
      setSearchError(SEARCH_ERROR_NO_RESULTS);
      setIsSearchLoading(false);
      saveToStorage(filterKeyword, isShortsChecked, filtered);
      return;
    }

    if (isShortsChecked) {
      const shorts = filterByThreshold(filtered, DURATION, DURATION_THRESHOLD);
      setFilteredMovies(shorts);
      setIsSearchLoading(false);
      saveToStorage(filterKeyword, isShortsChecked, filtered);
      return;
    }

    saveToStorage(filterKeyword, isShortsChecked, filtered);
    setFilteredMovies(filtered);
    setIsSearchLoading(false);
  }

  function handleShortsFilter() {
    setIsShortsChecked(!isShortsChecked);
  }

  // dynamic shorts filter (on click)
  useEffect(() => {
    if (isShortsChecked) {
      const shorts = filterByThreshold(filteredMovies, DURATION, DURATION_THRESHOLD);
      setPreviousFilteredMovies(filteredMovies);
      setFilteredMovies(shorts);
    } else {
      setFilteredMovies(previousFilteredMovies);
    }
  }, [isShortsChecked]);

  // load saved movies
  const fetchSavedMovies = useCallback(async () => {
    try {
      const response = await MainApi.getSavedMovies();
      setSavedMovies(response);
    } catch (error) {
      setSearchError(SEARCH_ERROR_API);
    }
  }, []);

  useEffect(() => {
    fetchSavedMovies();
  }, []);

  // save movie
  function handleSaveMovie(movie, isFavorite) {
    if (!isFavorite) {
      MainApi.saveMovie(movie)
        .then(() => {
          fetchSavedMovies();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  // delete movie
  function handleDeleteMovie(id) {
    const movieToDelete = savedMovies.find((movie) => movie.movieId === id);

    MainApi.deleteMovie(movieToDelete._id)
      .then(() => {
        fetchSavedMovies();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // check auth
  function handleAuth() {
    MainApi.getUserInfo().then((user) => {
      setCurrentUser(user);
      setSearchError('');
      setIsLoggedIn(true);
      navigate('/movies', { replace: true });
    }).catch((err) => { console.log(err); });
  }

  // signin
  function handleSignin(email, password) {
    MainApi.signin(email, password).then(() => {
      handleAuth();
    }).catch(() => {
      setSubmitError(DEFAULT_ERROR);
    });
  }

  // signup
  function handleSignup(email, password, name) {
    MainApi.signup(email, password, name).then(() => {
      handleSignin(email, password);
    }).catch(() => {
      setSubmitError(DEFAULT_ERROR);
    });
  }

  // stay loggedin
  useEffect(() => {
    if (!isLoggedIn) {
      handleAuth();
    }
  }, [isLoggedIn]);

  // edit user profile
  function handleEditProfile(name, email) {
    MainApi.editUserProfile(name, email).then((user) => {
      setCurrentUser(user);
      setSuccessfulEditMsg(SUCCESSFUL_EDIT_MESSAGE);
      setTimeout(() => {
        setSuccessfulEditMsg('');
      }, 3000);
    }).catch(() => {
      setSubmitError(DEFAULT_ERROR);
    });
  }

  // sign out
  function handleSignout() {
    MainApi.signout().then(() => {
      setIsLoggedIn(false);
      localStorage.clear();
      setFilteredMovies([]);
      navigate('/', { replace: true });
    }).catch(() => {
      setSubmitError(DEFAULT_ERROR);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
              <Movies
                filteredMovies={filteredMovies}
                savedMovies={savedMovies}
                onSubmit={handleSearchSubmit}
                isShortsChecked={isShortsChecked}
                onShortsCheck={handleShortsFilter}
                searchError={searchError}
                isSearchLoading={isSearchLoading}
                onSaveMovie={handleSaveMovie}
                onDeleteMovie={handleDeleteMovie} />
              <Footer />
            </>
          } />
          <Route path='/saved-movies' element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <SavedMovies
                filteredMovies={filteredMovies}
                savedMovies={savedMovies}
                onDeleteMovie={handleDeleteMovie} />
              <Footer />
            </>
          } />
          <Route path='/profile' element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Profile user={currentUser}
                onSubmit={handleEditProfile}
                onSignout={handleSignout}
                successfulEditMsg={successfulEditMsg}
                submitError={submitError} />
            </>
          } />
          <Route path='/signup' element={
            <Register onSubmit={handleSignup}
              submitError={submitError} />
          } />
          <Route path='/signin' element={
            <Login onSubmit={handleSignin} />
          } />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
