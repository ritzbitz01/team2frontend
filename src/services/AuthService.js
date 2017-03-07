import request from 'reqwest';
import when from 'when';
import {LOGIN_URL, SIGNUP_URL} from '../constants/LoginConstants';
import LoginActions from '../actions/LoginActions';
import RSVP from 'rsvp';

class AuthService {

  login(username, password) {

    return new RSVP.Promise(function(resolve, reject) {
      var postData = {'username':username, 'password':password};
  		$.ajax({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
  			type: 'post',
        url: 'http://localhost:8080/users/login',
        dataType: 'json',
        data: JSON.stringify(postData),
        cache: false,
        success: function(data) {
          let jwt = data.token;
          LoginActions.loginUser(username, jwt);
          resolve(data);
        },
        error: function(xhr, status, err) {
          console.log('http://localhost:8080/users/login', status, err.toString());
          reject(err);
        }
      });
    });
  }

  logout() {
    LoginActions.logoutUser();
  }

  createuser(username, firstname, lastname, email, password) {

    return new RSVP.Promise(function(resolve, reject) {

      var d = new Date();
      var n = d.getTime();
      var postData = {
        'username':username,
        'firstName':firstname,
        'lastName':lastname,
        'email':email,
        'joinDate':n,
        'password':password
      };
  		$.ajax({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
  			type: 'post',
        url: 'http://localhost:8080/users',
        dataType: 'text',
        data: JSON.stringify(postData),
        cache: false,
        success: function(data) {
          resolve(data);
        },
        error: function(xhr, status, err) {
          reject(err);
        }
      });

    })
  }

  signup(username, password, extra) {
    return this.handleAuth(when(request({
      url: SIGNUP_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        username, password, extra
      }
    })));
  }

  handleAuth(loginPromise) {
    return loginPromise
      .then(function(response) {
        var jwt = response.id_token;
        LoginActions.loginUser(jwt);
        return true;
      });
  }
}

export default new AuthService()
