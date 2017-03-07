import {LOGIN_USER, LOGOUT_USER} from '../constants/LoginConstants';
import BaseStore from './BaseStore';
import jwt_decode from 'jwt-decode';


class LoginStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._user = null;
    this._jwt = null;
  }

  _registerToActions(action) {
    switch(action.actionType) {
      case LOGIN_USER:
        this._jwt = action.jwt;
        this._user = action.user;
        this.emitChange();
        break;
      case LOGOUT_USER:
        console.log('LOGOUT USER ACTION HIT');
        this._user = null;
        this.emitChange();
        break;
      default:
        break;
    };
  }

  getUser() {
    return this._user;
  }

  getJwt() {
    return this._jwt;
  }

  isLoggedIn() {
    return !!this._user;
  }
}

export default new LoginStore();
