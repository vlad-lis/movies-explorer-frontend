import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Preloader from '../Preloader/Preloader';
import { moreMoviesBtn } from '../../utils/staticContent/moviesPageContent';
import useWindowSize from '../../hooks/useWindowSize';
import {
  HIGH_RES, HIGH_RES_DISPLAYED_AMOUNT, HIGH_RES_ADD_DISPLAYED,
  MIDDLE_RES, MIDDLE_RES_DISPLAYED_AMOUNT, MIDDLE_RES_ADD_DISPLAYED,
  LOW_RES, LOW_RES_DISPLAYED_AMOUNT, LOW_RES_ADD_DISPLAYED,
} from '../../utils/constants';

function MovieCardList({
  filteredMovies, savedMovies, searchError, savedCardsRoute,
  onSaveMovie, onDeleteMovie, isSearchLoading, filteredSavedMovies,
}) {
  const size = useWindowSize();
  const [displayedMoviesNumber, setDisplayedMoviesNumber] = useState(0);
  const [numberOfAddedMovies, setNumberOfAddedMovies] = useState(0);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const cardListClass = `cardList ${savedCardsRoute && 'cardList_extra-padding'}`;
  const displayedMoviesClass = `cardList__list ${isSearchLoading && '.cardList__list_hidden'}`;
  const moviesArray = savedCardsRoute ? filteredSavedMovies : filteredMovies;
  const moreMoviesBtnAlwaysHidden = `${(savedCardsRoute || searchError) && 'cardList__more-btn_hidden'}`;
  const moreMoviesBtnClass = `cardList__more-btn ${moviesArray.length <= displayedMoviesNumber && 'cardList__more-btn_hidden'} ${moreMoviesBtnAlwaysHidden}`;

  // handling the number of displayed movies
  const countMoviesToDisplay = () => {
    if (size.width >= HIGH_RES) {
      setDisplayedMoviesNumber(HIGH_RES_DISPLAYED_AMOUNT);
      setNumberOfAddedMovies(HIGH_RES_ADD_DISPLAYED);
    } else if (size.width >= MIDDLE_RES) {
      setDisplayedMoviesNumber(MIDDLE_RES_DISPLAYED_AMOUNT);
      setNumberOfAddedMovies(MIDDLE_RES_ADD_DISPLAYED);
    } else if (size.width >= LOW_RES) {
      setDisplayedMoviesNumber(LOW_RES_DISPLAYED_AMOUNT);
      setNumberOfAddedMovies(LOW_RES_ADD_DISPLAYED);
    }
  };

  const handleMoreMoviesBtn = () => {
    setDisplayedMoviesNumber(displayedMoviesNumber + numberOfAddedMovies);
  };

  useEffect(() => {
    countMoviesToDisplay();
  }, [size]);

  useEffect(() => {
    setDisplayedMovies(moviesArray.slice(0, displayedMoviesNumber));
  }, [moviesArray, displayedMoviesNumber]);

  return (
    <section className={cardListClass}>
      {searchError ? (
        <p>{searchError}</p>
      ) : (
        <ul className={displayedMoviesClass}>
          {displayedMovies.map((movie) => (
            <li key={savedCardsRoute ? movie.movieId : movie.id}>
              <MovieCard
                movie={movie}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
                savedCardsRoute={savedCardsRoute}
                savedMovies={savedMovies}
              />
            </li>
          ))}
        </ul>
      )}
      <Preloader loading={isSearchLoading} />
      <button className={moreMoviesBtnClass} onClick={handleMoreMoviesBtn}>{moreMoviesBtn}</button>
    </section>
  );
}

MovieCardList.propTypes = {
  filteredMovies: PropTypes.array,
  filteredSavedMovies: PropTypes.array,
  savedMovies: PropTypes.array,
  savedCardsRoute: PropTypes.bool.isRequired,
  searchError: PropTypes.string,
  onSaveMovie: PropTypes.func,
  onDeleteMovie: PropTypes.func,
  isSearchLoading: PropTypes.bool,
};

export default MovieCardList;
