import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';

function SavedMovies({ filteredMovies, savedMovies, onDeleteMovie }) {
  return (
    <main className='savedmovies-content'>
      <SearchForm />
      <MovieCardList
        filteredMovies={filteredMovies}
        savedMovies={savedMovies}
        savedCardsRoute={true}
        onDeleteMovie={onDeleteMovie} />
    </main>
  );
}

SavedMovies.propTypes = {
  filteredMovies: PropTypes.array,
  savedMovies: PropTypes.array,
  onDeleteMovie: PropTypes.func,
};

export default SavedMovies;
