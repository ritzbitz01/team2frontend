import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {LOGIN_USER, LOGOUT_USER} from '../constants/LoginConstants.js';

export default {
  loginUser: (username, jwt) => {
    var savedJwt = localStorage.getItem('jwt');

    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt: jwt,
      user: username
    });

    if (savedJwt !== jwt) {
      localStorage.setItem('jwt', jwt);
      localStorage.setItem('user', username);
    }
  },
  logoutUser: () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}
