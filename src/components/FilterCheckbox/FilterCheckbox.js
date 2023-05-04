import { searchform } from '../../utils/moviesPageContent';

function FilterCheckbox() {
  return (
    <label className='filter'>
      <input className='filter__checkbox' type='checkbox' />
      <span className='filter__switch'></span>
      {searchform.shortsBtn}
    </label>
  );
}

export default FilterCheckbox;
