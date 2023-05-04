import searchBtn from '../../images/search-btn.svg';
import { searchform } from '../../utils/moviesPageContent';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <fieldset className='search__film'>
          <input className='search__input' placeholder={searchform.placeholder} />
          <button className='search__submit-btn'><img src={searchBtn} alt='search' /></button>
        </fieldset>
        <fieldset className='search__switch'>
          <FilterCheckbox />
        </fieldset>
      </form>
    </section>
  );
}

export default SearchForm;
