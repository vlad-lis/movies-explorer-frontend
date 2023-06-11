import PropTypes from 'prop-types';
import { searchform } from '../../utils/staticContent/moviesPageContent';

function FilterCheckbox({ isShortsChecked, onShortsCheck }) {
  function handleCheckedChange(evt) {
    onShortsCheck(evt.target.checked);
  }

  return (
    <label className='filter'>
      <input
        className='filter__checkbox'
        type='checkbox'
        checked={isShortsChecked}
        onChange={handleCheckedChange} />
      <span className='filter__switch'></span>
      {searchform.shortsBtn}
    </label>
  );
}

FilterCheckbox.propTypes = {
  isShortsChecked: PropTypes.bool,
  onShortsCheck: PropTypes.func,
};

export default FilterCheckbox;
