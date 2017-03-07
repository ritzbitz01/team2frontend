import request from 'reqwest';
import when from 'when';
import {LOGIN_URL, SIGNUP_URL} from '../constants/LoginConstants';
import LoginActions from '../actions/LoginActions';
import RSVP from 'rsvp';

class WorldWriterService {

  createProject(username, projectName, projectDescription, projectOwner, projectPrivacy) {
    return new RSVP.Promise(function(resolve, reject) {
      var postData = {'projectName':projectName, 'projectDescription':projectDescription, 'projectOwner':projectOwner, 'projectPrivacy':projectPrivacy};
      var postUrl = 'http://localhost:8080/users/' + username + '/projects';
      $.ajax({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        type: 'post',
        url: postUrl,
        dataType: 'json',
        data: JSON.stringify(postData),
        cache: false,
        success: function(data) {
          resolve(data);
        },
        error: function(xhr, status, err) {
          console.error(LOGIN_URL, status, err.toString());
          reject(data);
        }
      });
    });
  }

  getProjects(username) {
    return new RSVP.Promise(function(resolve, reject) {
      var postUrl = 'http://localhost:8080/users/' + username + '/projects';
      console.log("GET PROJECTS URL: " + postUrl);
      $.ajax({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        type: 'get',
        url: postUrl,
        dataType: 'json',
        cache: false,
        success: function(data) {
          resolve(data);
        },
        error: function(xhr, status, err) {
          console.error(LOGIN_URL, status, err.toString());
          reject(data);
        }
      });
    });
  }

  getUserInformation(username) {
    return new RSVP.Promise(function(resolve, reject) {
      var postUrl = 'http://localhost:8080/users/' + username;
      console.log("GET USER INFO URL: " + postUrl);
      $.ajax({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        type: 'get',
        url: postUrl,
        dataType: 'json',
        cache: false,
        success: function(data) {
          resolve(data);
        },
        error: function(xhr, status, err) {
          console.error('http://localhost:8080/users/' + username, status, err.toString());
          reject(data);
        }
      });
    });
  }

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
          console.error(LOGIN_URL, status, err.toString());
          reject(data);
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

export default new WorldWriterService()
