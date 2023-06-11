const MOVIES_URL = 'https://api.nomoreparties.co';
const MAIN_API_URL = 'https://api.movie-explorer.nomoredomains.monster';
const PROPERTIES_TO_FILTER = ['nameRU', 'nameEN'];
const DURATION_PROPERTY = 'duration';
const DURATION_THRESHOLD = 40;
const SEARCH_ERROR_NO_RESULTS = 'Ничего не найдено';
const SEARCH_ERROR_NO_KEYWORD = 'Нужно ввести ключевое слово';
const SEARCH_ERROR_API = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
const DEFAULT_ERROR = 'Что-то пошло не так...';
const SUCCESSFUL_EDIT_MESSAGE = 'Профиль изменен';
const HIGH_RES = 1280;
const HIGH_RES_DISPLAYED_AMOUNT = 12;
const HIGH_RES_ADD_DISPLAYED = 3;
const MIDDLE_RES = 768;
const MIDDLE_RES_DISPLAYED_AMOUNT = 8;
const MIDDLE_RES_ADD_DISPLAYED = 2;
const LOW_RES = 320;
const LOW_RES_DISPLAYED_AMOUNT = 5;
const LOW_RES_ADD_DISPLAYED = 2;

export {
  MOVIES_URL, MAIN_API_URL, PROPERTIES_TO_FILTER, DURATION_PROPERTY, DURATION_THRESHOLD,
  SEARCH_ERROR_NO_RESULTS, SEARCH_ERROR_NO_KEYWORD, SEARCH_ERROR_API, DEFAULT_ERROR, SUCCESSFUL_EDIT_MESSAGE,
  HIGH_RES, HIGH_RES_DISPLAYED_AMOUNT, HIGH_RES_ADD_DISPLAYED, MIDDLE_RES, MIDDLE_RES_DISPLAYED_AMOUNT,
  MIDDLE_RES_ADD_DISPLAYED, LOW_RES, LOW_RES_DISPLAYED_AMOUNT, LOW_RES_ADD_DISPLAYED,
};
