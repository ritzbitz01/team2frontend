import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import LoginActions from '../actions/LoginActions'
import AuthService from '../services/AuthService'
import '../css/base.css'
import '../css/bootstrap.min.css'

export default React.createClass({
  getInitialState() {
    return {
      error: false,
      errorMsg: '',
      username: '',
      password: ''

    };
  },

  getValidationState() {
    const length = this.state.username.length;
    if(length == 0) return 'error';
    else return 'success';
  },

  contextTypes: {
    router: React.PropTypes.object
  },

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  },

  handlePasswordChange(e) {
    this.setState({ password: e.target.value});
  },

  handleSubmit(event) {

    event.preventDefault()

    var loggedIn = AuthService.login(this.state.username, this.state.password);
    var self = this;
    loggedIn.then(function(data) {
      browserHistory.push('/projects')
    }).catch(function(err) {
      self.setState({errorMsg: err});
      return self.setState({ error: true })
    })

  },

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <h2>Data Deletion UI Login</h2>
            <FormGroup
              validationState={this.getValidationState()}
            >
              <ControlLabel>Username</ControlLabel>
              <FormControl
                id="formControlsText"
                type="text"
                label="Username"
                placeholder="Enter Username"
                onChange={this.handleUsernameChange}
              />
            </FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              id="formControlsPassword"
              label="Password"
              type="password"
              onChange={this.handlePasswordChange}
            />
            <Button type="submit" disabled={!this.state.username || !this.state.password} bsStyle="primary" block>
              Login
            </Button>
            {this.state.error && (
              <div className="loginerrordiv">
                <h4>ERROR: {this.state.errorMsg}</h4>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
})
