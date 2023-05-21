import PropTypes from 'prop-types';
import { MOVIES_URL } from '../../utils/constants';
import { normalizeMovieProps } from '../../utils/auxiliaryFunctions';

function MovieCard({
  movie, savedCardsRoute, onSaveMovie, onDeleteMovie, savedMovies,
}) {
  const {
    image, nameRU, duration,
  } = movie;
  const isFavorite = savedCardsRoute ? true : savedMovies.some((savedMovie) => savedMovie.movieId === movie.id);
  const cardLikeClass = `card__favorite-btn ${isFavorite && 'card__favorite-btn_active'}`;

  function convertTime(min) {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return `${hours}ч ${minutes}м`;
  }

  function handleSaveMovie() {
    const normalizedMovie = normalizeMovieProps(movie);
    onSaveMovie(normalizedMovie, isFavorite);
  }

  function handleDeleteMovie() {
    const id = savedCardsRoute ? movie.movieId : movie.id;
    onDeleteMovie(id);
  }

  return (
    <figure className='card'>
      <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
        <img className='card__image' src={savedCardsRoute ? image : `${MOVIES_URL + image.url}`} alt='movie screenshot' />
      </a>
      <figcaption className='card__caption'>
        <div className='card__title-container'>
          <h3 className='card__title'>{nameRU}</h3>
          {savedCardsRoute
            ? <button className='card__favorite-btn card__delete-btn' onClick={handleDeleteMovie} />
            : <button className={cardLikeClass} onClick={isFavorite ? handleDeleteMovie : handleSaveMovie} />}
        </div>
        <p className='card__duration'>{convertTime(duration)}</p>
      </figcaption>
    </figure>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object,
  savedMovies: PropTypes.array,
  savedCardsRoute: PropTypes.bool.isRequired,
  onSaveMovie: PropTypes.func,
  onDeleteMovie: PropTypes.func,
};

export default MovieCard;
