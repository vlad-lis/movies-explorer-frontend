const MOVIES_URL = 'https://api.nomoreparties.co';
const MAIN_API_URL = 'https://api.movie-explorer.nomoredomains.monster';
const PROPERTIES_TO_FILTER = ['nameRU', 'nameEN', 'director', 'country', 'description'];
const DURATION = 'duration';
const DURATION_THRESHOLD = 40;
const SEARCH_ERROR_NO_RESULTS = 'Ничего не найдено';
const SEARCH_ERROR_API = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const DEFAULT_ERROR = 'Что-то пошло не так...';
const SUCCESSFUL_EDIT_MESSAGE = 'Профиль изменен';

export {
  MOVIES_URL, MAIN_API_URL, PROPERTIES_TO_FILTER, DURATION, DURATION_THRESHOLD,
  SEARCH_ERROR_NO_RESULTS, SEARCH_ERROR_API, DEFAULT_ERROR, SUCCESSFUL_EDIT_MESSAGE,
};
