import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { searchform } from '../../utils/staticContent/moviesPageContent';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  onSubmit, isShortsChecked, onShortsCheck, savedCardsRoute, onNoInput,
}) {
  const storedKeyword = localStorage.getItem('keyword');
  const [keyword, setKeyword] = useState((!savedCardsRoute && storedKeyword) || '');

  // do not display stored keyword from /movies
  useEffect(() => {
    if (savedCardsRoute) {
      setKeyword('');
    }
  }, []);

  function handleChange(evt) {
    setKeyword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!savedCardsRoute) {
      localStorage.setItem('keyword', keyword);
    }

    if (keyword.trim() === '') {
      onNoInput();
      return;
    }

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
  savedCardsRoute: PropTypes.bool,
  onNoInput: PropTypes.func,
};

export default SearchForm;
