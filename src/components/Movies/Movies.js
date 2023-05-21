import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';
import Preloader from '../Preloader/Preloader';

function Movies({
  filteredMovies, savedMovies, onSubmit, isShortsChecked, onShortsCheck,
  searchError, isSearchLoading, onSaveMovie, onDeleteMovie,
}) {
  return (
    <main className='movies-content'>
      <SearchForm
        onSubmit={onSubmit}
        isShortsChecked={isShortsChecked}
        onShortsCheck={onShortsCheck}
        savedCardsRoute={false} />
      <Preloader loading={isSearchLoading} />
      <MovieCardList
        filteredMovies={filteredMovies}
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
  savedMovies: PropTypes.array,
  onSubmit: PropTypes.func,
  isShortsChecked: PropTypes.bool,
  onShortsCheck: PropTypes.func,
  searchError: PropTypes.string,
  isSearchLoading: PropTypes.bool,
  onSaveMovie: PropTypes.func,
  onDeleteMovie: PropTypes.func,
};

export default Movies;
