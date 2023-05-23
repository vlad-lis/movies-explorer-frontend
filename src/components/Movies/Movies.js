import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';

function Movies({
  filteredMovies, savedMovies, onSubmit, isShortsChecked, onShortsCheck,
  searchError, isSearchLoading, onSaveMovie,
  onDeleteMovie, onNoInput, filteredSavedMovies,
}) {
  return (
    <main className='movies-content'>
      <SearchForm
        onSubmit={onSubmit}
        isShortsChecked={isShortsChecked}
        onShortsCheck={onShortsCheck}
        savedCardsRoute={false}
        onNoInput={onNoInput} />
      <MovieCardList
        isSearchLoading={isSearchLoading}
        filteredMovies={filteredMovies}
        filteredSavedMovies={filteredSavedMovies}
        savedMovies={savedMovies}
        searchError={searchError}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
        savedCardsRoute={false} />
    </main>
  );
}

Movies.propTypes = {
  filteredMovies: PropTypes.array,
  filteredSavedMovies: PropTypes.array,
  savedMovies: PropTypes.array,
  onSubmit: PropTypes.func,
  isShortsChecked: PropTypes.bool,
  onShortsCheck: PropTypes.func,
  searchError: PropTypes.string,
  isSearchLoading: PropTypes.bool,
  onSaveMovie: PropTypes.func,
  onDeleteMovie: PropTypes.func,
  onNoInput: PropTypes.func,
};

export default Movies;
