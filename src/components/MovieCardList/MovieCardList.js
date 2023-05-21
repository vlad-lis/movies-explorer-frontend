import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { moreMoviesBtn } from '../../utils/staticContent/moviesPageContent';
import useWindowSize from '../../hooks/useWindowSize';

function MovieCardList({
  filteredMovies, savedMovies, searchError, savedCardsRoute, onSaveMovie, onDeleteMovie,
}) {
  const size = useWindowSize();
  const [displayedMoviesNumber, setDisplayedMoviesNumber] = useState(0);
  const [numberOfAddedMovies, setNumberOfAddedMovies] = useState(0);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const cardListClass = `cardList ${savedCardsRoute && 'cardList_extra-padding'}`;
  const moviesArray = savedCardsRoute ? savedMovies : filteredMovies;
  const moreMoviesBtnClass = `cardList__more-btn ${moviesArray.length <= displayedMoviesNumber && 'cardList__more-btn_hidden'}`;

  // handling the number of displayed movies
  const countMoviesToDisplay = () => {
    if (size.width >= 1280) {
      setDisplayedMoviesNumber(12);
      setNumberOfAddedMovies(3);
    } else if (size.width >= 768) {
      setDisplayedMoviesNumber(8);
      setNumberOfAddedMovies(2);
    } else if (size.width >= 320) {
      setDisplayedMoviesNumber(5);
      setNumberOfAddedMovies(2);
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
        <ul className='cardList__list'>
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
      <button className={moreMoviesBtnClass} onClick={handleMoreMoviesBtn}>{moreMoviesBtn}</button>
    </section>
  );
}

MovieCardList.propTypes = {
  filteredMovies: PropTypes.array,
  savedMovies: PropTypes.array,
  savedCardsRoute: PropTypes.bool.isRequired,
  searchError: PropTypes.string,
  onSaveMovie: PropTypes.func,
  onDeleteMovie: PropTypes.func,
};

export default MovieCardList;
