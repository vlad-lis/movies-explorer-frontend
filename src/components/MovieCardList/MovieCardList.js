import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import { moreMoviesBtn } from '../../utils/moviesPageContent';

function MovieCardList({ movies, savedCardsRoute }) {
  const cardListClass = `cardList ${savedCardsRoute && 'cardList_extra-padding'}`;
  const moreMoviesBtnClass = `cardList__more-btn ${savedCardsRoute && 'cardList__more-btn_hidden'}`;
  const moviesList = savedCardsRoute ? movies.filter((movie) => movie.isFavorite) : movies;

  return (
    <section className={cardListClass}>
      <ul className='cardList__list'>
        {moviesList.map((film) => (
          <li key={film.id}>
            <MovieCard
              movie={film}
              savedCardsRoute={savedCardsRoute}
            />
          </li>
        ))}
      </ul>
      <button className={moreMoviesBtnClass}>{moreMoviesBtn}</button>
    </section>
  );
}

MovieCardList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    }),
  ),
  savedCardsRoute: PropTypes.bool.isRequired,
};

export default MovieCardList;
