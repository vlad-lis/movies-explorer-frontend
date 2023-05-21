import PropTypes from 'prop-types';
import { useState } from 'react';
import { searchform } from '../../utils/staticContent/moviesPageContent';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSubmit, isShortsChecked, onShortsCheck }) {
  const storedKeyword = localStorage.getItem('keyword');
  const [keyword, setKeyword] = useState(storedKeyword || '');

  function handleChange(evt) {
    setKeyword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(keyword);
  }

  return (
    <div className='search'>
      <form className='search__form'>
        <fieldset className='search__film'>
          <input
            className='search__input'
            placeholder={searchform.placeholder}
            onChange={handleChange}
            value={keyword || ''}
            required />
          <button className='search__submit-btn' onClick={handleSubmit} />
        </fieldset>
        <fieldset className='search__switch'>
          <FilterCheckbox isShortsChecked={isShortsChecked} onShortsCheck={onShortsCheck} />
        </fieldset>
      </form>
    </div>
  );
}

SearchForm.propTypes = {
  isShortsChecked: PropTypes.bool,
  onShortsCheck: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default SearchForm;
