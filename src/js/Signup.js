import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import AuthService from '../services/AuthService'
import '../css/base.css'
import '../css/bootstrap.min.css'

export default React.createClass({

  getInitialState() {
    return {
      error: false,
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordagain: ''
    };
  },

  getValidationState() {
    const length = this.state.username.length;
    if(length == 0) return 'error';
    else return 'success';
  },

  getValidationPWAgainState() {
    if(this.state.passwordagain == this.state.password) {
      return 'success';
    }
    else  {
      return 'error';
    }
  },

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  },

  handleFirstNameChange(e) {
    this.setState({ firstname: e.target.value });
  },

  handleLastNameChange(e) {
    this.setState({ lastname: e.target.value});
  },

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  },

  handlePasswordChange(e) {
    this.setState({ password: e.target.value});
  },

  handlePasswordAgainChange(e) {
    this.setState({ passwordagain: e.target.value});
  },

  handleSubmit(event) {

    event.preventDefault()

    var self = this;

    var created = AuthService.createuser(this.state.username, this.state.firstname, this.state.lastname, this.state.email, this.state.password);
    created.then(function(data) {
      console.log('SHOULD BE GOING TO LOGIN');
      browserHistory.push('/login')
    }).catch(function(err) {
      return self.setState({ error: true })
    })

  },

  render() {
    return (
      <div className="signup-page">
        <div className="form">
          <form className="register-form" onSubmit={this.handleSubmit}>
            <h2>World Writer Account Creation</h2>
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
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              id="formControlsFirstName"
              label="First Name"
              type="text"
              onChange={this.handleFirstNameChange}
            />
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              id="formControlsLastName"
              label="Last Name"
              type="text"
              onChange={this.handleLastNameChange}
            />
            <ControlLabel>Email</ControlLabel>
            <FormControl
              id="formControlsEmail"
              label="Email"
              type="text"
              onChange={this.handleEmailChange}
            />
            <ControlLabel>Password</ControlLabel>
            <FormControl
              id="formControlsPassword"
              label="Password"
              type="password"
              onChange={this.handlePasswordChange}
            />
            <FormGroup validationState={this.getValidationPWAgainState()}>
              <ControlLabel>Password Again</ControlLabel>
              <FormControl
                id="formControlsPasswordAgain"
                label="PasswordAgain"
                type="password"
                onChange={this.handlePasswordAgainChange}
              />
            </FormGroup>
            <Button type="submit" disabled={(
              !this.state.username ||
              !this.state.firstname ||
              !this.state.lastname ||
              !this.state.email ||
              !this.state.passwordagain ||
              !this.state.password) || (this.state.password != this.state.passwordagain)} bsStyle="primary" block>
              Submit
            </Button>
            {this.state.error && (
              <p>Bad login information</p>
            )}
          </form>
        </div>
      </div>
    );
  }
})
