import { searchform } from '../../utils/moviesPageContent';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className='search'>
      <form className='search__form'>
        <fieldset className='search__film'>
          <input className='search__input' placeholder={searchform.placeholder} required/>
          <button className='search__submit-btn'/>
        </fieldset>
        <fieldset className='search__switch'>
          <FilterCheckbox />
        </fieldset>
      </form>
    </div>
  );
}

export default SearchForm;
