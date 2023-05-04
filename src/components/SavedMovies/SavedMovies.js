import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';
import testCards from '../../utils/testCards';

function SavedMovies() {
  return (
    <main className='savedmovies-content'>
      <SearchForm />
      <MovieCardList movies={testCards} savedCardsRoute={true} />
    </main>
  );
}

export default SavedMovies;
