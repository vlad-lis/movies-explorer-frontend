import { MOVIES_URL } from './constants';

// filter an array of objects by keyword in properties
function filterArray(array, keyword, properties) {
  return array.filter((obj) => {
    let found = false;
    Object.keys(obj).forEach((prop) => {
      if (
        properties.includes(prop)
        && typeof obj[prop] === 'string'
        && obj[prop].toLowerCase().includes(keyword.toLowerCase())
      ) {
        found = true;
      }
    });
    return found;
  });
}

// filter an array by property value threshold
function filterByThreshold(array, property, threshold) {
  return array.filter((obj) => obj[property] <= threshold);
}

// save search settings to local storage
function saveToStorage(shortsChecked, movies) {
  localStorage.setItem('shortsChecked', JSON.stringify(shortsChecked));
  localStorage.setItem('filteredMovies', JSON.stringify(movies));
}

// normalize movie properties for Main Api
function normalizeMovieProps(movie) {
  return {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: MOVIES_URL + movie.image.url,
    trailerLink: movie.trailerLink,
    thumbnail: MOVIES_URL + movie.image.formats.thumbnail.url,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  };
}

// check coockies for jwt
function checkJwtCookie() {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    if (cookie.startsWith('jwt')) {
      return true;
    }
  }

  return false;
}

export {
  filterArray, filterByThreshold, saveToStorage, normalizeMovieProps, checkJwtCookie,
};
