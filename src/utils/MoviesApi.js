const BASE_URL = 'https://api.nomoreparties.co';

function renderResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

export default function getMovies() {
  return fetch(`${BASE_URL}/beatfilm-movies`, {
    method: 'GET',
  }).then(renderResponse);
}
