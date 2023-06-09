import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';

function SavedMovies({
  filteredMovies, savedMovies, onDeleteMovie, onSubmit,
  isShortsChecked, onShortsCheck, searchError,
  onNoInput, filteredSavedMovies,
}) {
  return (
    <main className='savedmovies-content'>
      <SearchForm
        onSubmit={onSubmit}
        isShortsChecked={isShortsChecked}
        onShortsCheck={onShortsCheck}
        savedCardsRoute={true}
        onNoInput={onNoInput} />
      <MovieCardList
        filteredMovies={filteredMovies}
        filteredSavedMovies={filteredSavedMovies}
        searchError={searchError}
        savedMovies={savedMovies}
        savedCardsRoute={true}
        onDeleteMovie={onDeleteMovie} />
    </main>
  );
}

SavedMovies.propTypes = {
  filteredMovies: PropTypes.array,
  savedMovies: PropTypes.array,
  filteredSavedMovies: PropTypes.array,
  onDeleteMovie: PropTypes.func,
  onSubmit: PropTypes.func,
  isShortsChecked: PropTypes.bool,
  onShortsCheck: PropTypes.func,
  searchError: PropTypes.string,
  onNoInput: PropTypes.func,
};

export default SavedMovies;
