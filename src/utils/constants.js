const MOVIES_URL = 'https://api.nomoreparties.co';
const MAIN_API_URL = 'https://api.movie-explorer.nomoredomains.monster';
const PROPERTIES_TO_FILTER = ['nameRU', 'nameEN'];
const DURATION_PROPERTY = 'duration';
const DURATION_THRESHOLD = 40;
const SEARCH_ERROR_NO_RESULTS = 'No matching results found';
const SEARCH_ERROR_NO_KEYWORD = 'Please enter keyword';
const SEARCH_ERROR_API = 'An unexpected error occurred. This could be caused by the server. Please try again later.';
const DEFAULT_ERROR = 'Something went wrong...';
const SUCCESSFUL_EDIT_MESSAGE = 'Profile changed successfully';
const HIGH_RES = 1280;
const HIGH_RES_DISPLAYED_AMOUNT = 12;
const HIGH_RES_ADD_DISPLAYED = 3;
const MIDDLE_RES = 768;
const MIDDLE_RES_DISPLAYED_AMOUNT = 8;
const MIDDLE_RES_ADD_DISPLAYED = 2;
const LOW_RES = 320;
const LOW_RES_DISPLAYED_AMOUNT = 5;
const LOW_RES_ADD_DISPLAYED = 2;
const INPUT_OPTIONS = {
  name: {
    required: 'Please enter your name',
    minLength: {
      value: 2,
      message: 'At least two letters',
    },
    maxLength: {
      value: 30,
      message: 'Maximum of 30 characters',
    },
    pattern: {
      value: /^[A-Za-z-]+$/,
      message: 'Please use only Latin letters and a hyphen',
    },
  },
  email: {
    required: 'Please enter email',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Please enter a valid email address',
    },
  },
  password: {
    required: 'This field is required',
    minLength: {
      value: 5,
      message: 'Passowrd must be a minimum of five symbols',
    },
  },
};

export {
  MOVIES_URL, MAIN_API_URL, PROPERTIES_TO_FILTER, DURATION_PROPERTY, DURATION_THRESHOLD,
  SEARCH_ERROR_NO_RESULTS, SEARCH_ERROR_NO_KEYWORD, SEARCH_ERROR_API, DEFAULT_ERROR, SUCCESSFUL_EDIT_MESSAGE,
  HIGH_RES, HIGH_RES_DISPLAYED_AMOUNT, HIGH_RES_ADD_DISPLAYED, MIDDLE_RES, MIDDLE_RES_DISPLAYED_AMOUNT,
  MIDDLE_RES_ADD_DISPLAYED, LOW_RES, LOW_RES_DISPLAYED_AMOUNT, LOW_RES_ADD_DISPLAYED, INPUT_OPTIONS,
};
