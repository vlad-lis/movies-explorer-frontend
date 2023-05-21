const BASE_URL = 'https://api.movie-explorer.nomoredomains.monster';

function renderResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

// user
export function signup(email, password, name) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
    credentials: 'include',
  }).then(renderResponse);
}

export function signin(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(renderResponse);
}

export function signout() {
  return fetch(`${BASE_URL}/users/signout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then(renderResponse);
}

export function getUserInfo() {
  return fetch(`${BASE_URL}/users/me`, {
    credentials: 'include',
    method: 'GET',
  }).then(renderResponse);
}

export function editUserProfile(name, email) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
    credentials: 'include',
  })
    .then(renderResponse);
}

// movies
export function getSavedMovies() {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then(renderResponse);
}

export function saveMovie(movie) {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movie.image,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: movie.thumbnail,
      movieId: movie.movieId,
    }),
  }).then(renderResponse);
}

export function deleteMovie(movieId) {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then(renderResponse);
}
