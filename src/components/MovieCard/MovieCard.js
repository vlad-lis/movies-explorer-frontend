import PropTypes from 'prop-types';
import { useState } from 'react';

function MovieCard({ movie, savedCardsRoute }) {
  const {
    image, name, duration, isFavorite,
  } = movie;
  const [inFavorites, setInFavorites] = useState(isFavorite);
  const cardLikeClass = `card__favorite-btn ${inFavorites && 'card__favorite-btn_active'}`;

  function convertTime(min) {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return `${hours}ч ${minutes}м`;
  }

  function handleLike() {
    setInFavorites(!inFavorites);
  }

  return (
    <figure className='card'>
      <img className='card__image' src={image} alt='movie screenshot'/>
      <figcaption className='card__caption'>
        <div className='card__title-container'>
          <h3 className='card__title'>{name}</h3>
          {savedCardsRoute
            ? <button className='card__favorite-btn card__delete-btn' onClick={handleLike} />
            : <button className={cardLikeClass} onClick={handleLike} />}
        </div>
        <p className='card__duration'>{convertTime(duration)}</p>
      </figcaption>
    </figure>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }),
  savedCardsRoute: PropTypes.bool.isRequired,
};

export default MovieCard;
