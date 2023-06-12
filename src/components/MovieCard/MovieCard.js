import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { MOVIES_URL } from '../../utils/constants';

function MovieCard({
  movie, savedCardsRoute, onSaveMovie, onDeleteMovie, savedMovies,
}) {
  const {
    image, nameEN, duration,
  } = movie;
  const [isFavorite, setIsFavorite] = useState(savedCardsRoute ? true : savedMovies.some((savedMovie) => savedMovie.movieId === movie.id));
  const cardLikeClass = `card__favorite-btn ${isFavorite && 'card__favorite-btn_active'}`;

  function convertTime(min) {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return `${hours}ч ${minutes}м`;
  }

  useEffect(() => {
    setIsFavorite(savedMovies?.some((savedMovie) => savedMovie.movieId === movie.id));
  }, [movie, savedMovies]);

  function handleSaveMovie() {
    onSaveMovie(movie, isFavorite, setIsFavorite);
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
          <h3 className='card__title'>{nameEN}</h3>
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
