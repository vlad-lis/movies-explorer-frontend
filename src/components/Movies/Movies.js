import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';
import testCards from '../../utils/testCards';

function Movies() {
  return (
    <main className='movies-content'>
      <SearchForm />
      <MovieCardList movies={testCards} savedCardsRoute={false} />
    </main>
  );
}

export default Movies;
