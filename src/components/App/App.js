import {
  useState, useEffect, useCallback,
} from 'react';
import {
  Route, Routes, useNavigate, useLocation,
} from 'react-router-dom';
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
import {
  filterArray, filterByThreshold, saveToStorage, normalizeMovieProps,
} from '../../utils/auxiliaryFunctions';
import {
  PROPERTIES_TO_FILTER, DURATION_PROPERTY, DURATION_THRESHOLD, SEARCH_ERROR_NO_RESULTS,
  SEARCH_ERROR_NO_KEYWORD, SEARCH_ERROR_API, DEFAULT_ERROR, SUCCESSFUL_EDIT_MESSAGE,
} from '../../utils/constants';
import * as MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInStatusInStorage = JSON.parse(localStorage.getItem('isLoggedIn'));
  const [initialMovies, setInitialMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const storedShortsChecked = JSON.parse(localStorage.getItem('shortsChecked'));
  const storedMovies = JSON.parse(localStorage.getItem('filteredMovies'));
  const storedKeyword = localStorage.getItem('keyword');
  const [isShortsChecked, setIsShortsChecked] = useState(storedShortsChecked || false);
  const [isSavedShortsChecked, setIsSavedShortsChecked] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(storedMovies || []);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState(savedMovies);
  const [previousSavedMovies, setPreviousSavedMovies] = useState(savedMovies || []);
  const [searchError, setSearchError] = useState('');
  const [searchSavedError, setSearchSavedError] = useState('');
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [successfulEditMsg, setSuccessfulEditMsg] = useState('');
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // load saved movies
  useEffect(() => {
    if (isLoggedIn) {
      checkAuth();
      fetchSavedMovies();
    }
  }, [isLoggedIn]);

  // save filter settings to storage on change
  useEffect(() => {
    saveToStorage(isShortsChecked, filteredMovies);
  }, [filteredMovies]);

  // load saved movies
  const fetchSavedMovies = useCallback(async () => {
    try {
      const response = await MainApi.getSavedMovies();
      setSavedMovies(response);
    } catch (error) {
      setSearchSavedError(SEARCH_ERROR_API);
    }
  }, []);

  // handle no input
  function handleNoInput() {
    if (location.pathname === '/movies') {
      setSearchError(SEARCH_ERROR_NO_KEYWORD);
    } else if (location.pathname === '/saved-movies') {
      setSearchSavedError(SEARCH_ERROR_NO_KEYWORD);
    }
  }

  // handle search in /movies
  function handleSearch(filterKeyword) {
    setFilteredMovies([]);
    setSearchError('');

    if (initialMovies.length === 0) {
      setIsSearchLoading(true);
      getMovies()
        .then((movies) => {
          setInitialMovies(movies);
          let filtered = filterArray(movies, filterKeyword, PROPERTIES_TO_FILTER);

          if (isShortsChecked) {
            filtered = filterByThreshold(filtered, DURATION_PROPERTY, DURATION_THRESHOLD);
          }

          if (filtered.length === 0) {
            setSearchError(SEARCH_ERROR_NO_RESULTS);
          } else {
            setFilteredMovies(filtered);
          }
        })
        .catch(() => setSearchError(SEARCH_ERROR_API))
        .finally(() => setIsSearchLoading(false));
    } else {
      let filtered = filterArray(initialMovies, filterKeyword, PROPERTIES_TO_FILTER);

      if (isShortsChecked) {
        filtered = filterByThreshold(filtered, DURATION_PROPERTY, DURATION_THRESHOLD);
      }

      if (filtered.length === 0) {
        setSearchError(SEARCH_ERROR_NO_RESULTS);
      } else {
        setFilteredMovies(filtered);
      }
    }
  }

  // handle search in /saved-movies
  function handleSearchSaved(filterKeyword) {
    setSearchSavedError('');

    let filtered = filterArray(savedMovies, filterKeyword, PROPERTIES_TO_FILTER);

    if (isSavedShortsChecked) {
      filtered = filterByThreshold(filtered, DURATION_PROPERTY, DURATION_THRESHOLD);
    }

    if (filtered.length === 0) {
      setSearchSavedError(SEARCH_ERROR_NO_RESULTS);
    } else {
      setFilteredSavedMovies(filtered);
    }
  }

  // shorts switch for /movies
  function handleShortsFilter() {
    setIsShortsChecked(!isShortsChecked);
  }

  // shorts switch for /saved-movies
  function handleSavedShortsFilter() {
    setIsSavedShortsChecked(!isSavedShortsChecked);
  }

  // dynamic shorts filter (on click) for /movies
  useEffect(() => {
    setSearchError('');

    if (isShortsChecked && storedMovies.length !== 0) {
      const shorts = filterByThreshold(filteredMovies, DURATION_PROPERTY, DURATION_THRESHOLD);
      setFilteredMovies(shorts);

      if (shorts.length === 0) {
        setSearchError(SEARCH_ERROR_NO_RESULTS);
      }
    } else if (!isShortsChecked && storedMovies && storedMovies.length !== 0) {
      handleSearch(storedKeyword);
    }
  }, [isShortsChecked]);

  // dynamic shorts filter (on click) for /saved-movies
  useEffect(() => {
    setSearchSavedError('');

    if (isSavedShortsChecked && savedMovies.length !== 0) {
      const savedShorts = filterByThreshold(savedMovies, DURATION_PROPERTY, DURATION_THRESHOLD);
      setPreviousSavedMovies(savedMovies);
      setFilteredSavedMovies(savedShorts);

      if (savedShorts.length === 0) {
        setSearchSavedError(SEARCH_ERROR_NO_RESULTS);
      }
    } else {
      setFilteredSavedMovies(previousSavedMovies);
    }
  }, [isSavedShortsChecked]);

  // save movie
  function handleSaveMovie(movie, isFavorite, setIsFavorite) {
    const normalizedMovie = normalizeMovieProps(movie);

    if (!isFavorite) {
      MainApi.saveMovie(normalizedMovie)
        .then((savedMovie) => {
          setSavedMovies([savedMovie, ...savedMovies]);
          setIsFavorite(true);
          // setFilteredMovies((state) => state.map((c) => (c.id === movie.id ? movie : c)));
        })
        .catch(() => {
          setSearchSavedError(SEARCH_ERROR_API);
        });
    }
  }

  useEffect(() => {
    setFilteredSavedMovies(savedMovies);
  }, [savedMovies]);

  // delete movie
  function handleDeleteMovie(id) {
    const movieToDelete = savedMovies.find((movie) => movie.movieId === id);

    MainApi.deleteMovie(movieToDelete._id)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c._id !== movieToDelete._id));
      })
      .catch(() => {
        setSearchSavedError(SEARCH_ERROR_API);
      });
  }

  // check auth
  function checkAuth() {
    MainApi.checkAuth().then((user) => {
      setCurrentUser(user);
      setSearchError('');
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', true);
    })
      .catch((err) => { console.log(err); });
  }

  useEffect(() => {
    if (!isLoggedIn) {
      checkAuth();
    }
  }, []);

  // signin
  function handleSignin(email, password) {
    setIsFormDisabled(true);
    MainApi.signin(email, password).then((res) => {
      if (res) {
        checkAuth();
        setIsLoggedIn(true);
        navigate('/movies', { replace: true });
      }
    }).catch(() => {
      setSubmitError(DEFAULT_ERROR);
    }).finally(() => {
      setIsFormDisabled(false);
    });
  }

  // signup
  function handleSignup(email, password, name) {
    setIsFormDisabled(true);
    MainApi.signup(email, password, name).then((res) => {
      if (res) {
        checkAuth();
        handleSignin(email, password);
        navigate('/movies', { replace: true });
      }
    }).catch(() => {
      setSubmitError(DEFAULT_ERROR);
    }).finally(() => {
      setIsFormDisabled(false);
    });
  }

  // edit user profile
  function handleEditProfile(name, email) {
    setIsFormDisabled(true);
    MainApi.editUserProfile(name, email).then((user) => {
      setCurrentUser(user);
      setSuccessfulEditMsg(SUCCESSFUL_EDIT_MESSAGE);
      setTimeout(() => {
        setSuccessfulEditMsg('');
      }, 3000);
    }).catch(() => {
      setSubmitError(DEFAULT_ERROR);
    }).finally(() => {
      setIsFormDisabled(false);
    });
  }

  // sign out
  function handleSignout() {
    MainApi.signout().then(() => {
      setIsLoggedIn(false);
      setInitialMovies([]);
      setFilteredMovies([]);
      localStorage.clear();
      setIsShortsChecked(false);
      setIsSavedShortsChecked(false);
      navigate('/', { replace: true });
    }).catch(() => {
      setSubmitError(DEFAULT_ERROR);
    });
  }

  // reset errors on route change
  useEffect(() => {
    setSubmitError('');
    setSearchSavedError('');
    setIsSavedShortsChecked(false);
    if (location.pathname === '/saved-movies') {
      setFilteredSavedMovies(savedMovies);
    }
  }, [location]);

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
            <ProtectedRouteElement isLoggedIn={loggedInStatusInStorage}>
              <Header isLoggedIn={isLoggedIn} />
              <Movies
                filteredMovies={filteredMovies}
                savedMovies={savedMovies}
                filteredSavedMovies={filteredSavedMovies}
                onSubmit={handleSearch}
                isShortsChecked={isShortsChecked}
                onShortsCheck={handleShortsFilter}
                searchError={searchError}
                isSearchLoading={isSearchLoading}
                onSaveMovie={handleSaveMovie}
                onDeleteMovie={handleDeleteMovie}
                onNoInput={handleNoInput} />
              <Footer />
            </ProtectedRouteElement>
          } />
          <Route path='/saved-movies' element={
            <ProtectedRouteElement isLoggedIn={loggedInStatusInStorage}>
              <Header isLoggedIn={isLoggedIn} />
              <SavedMovies
                filteredMovies={filteredMovies}
                savedMovies={savedMovies}
                filteredSavedMovies={filteredSavedMovies}
                onShortsCheck={handleSavedShortsFilter}
                onDeleteMovie={handleDeleteMovie}
                searchError={searchSavedError}
                isShortsChecked={isSavedShortsChecked}
                onSubmit={handleSearchSaved}
                onNoInput={handleNoInput} />
              <Footer />
            </ProtectedRouteElement>
          } />
          <Route path='/profile' element={
            <ProtectedRouteElement isLoggedIn={loggedInStatusInStorage}>
              <Header isLoggedIn={isLoggedIn} />
              <Profile
                user={currentUser}
                onSubmit={handleEditProfile}
                onSignout={handleSignout}
                successfulEditMsg={successfulEditMsg}
                submitError={submitError}
                isFormDisabled={isFormDisabled}
              />
            </ProtectedRouteElement>
          } />
          <Route path='/signup' element={
            <Register
              onSubmit={handleSignup}
              submitError={submitError}
              isFormDisabled={isFormDisabled} />
          } />
          <Route path='/signin' element={
            <Login
              onSubmit={handleSignin}
              submitError={submitError}
              isFormDisabled={isFormDisabled} />
          } />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
