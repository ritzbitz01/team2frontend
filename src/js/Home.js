import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import auth from './auth';
import LoginStore from '../stores/LoginStore';
import '../css/base.css'
import '../css/bootstrap.min.css'

export default React.createClass({

  getInitialState() {
    return {authenticated: LoginStore.isLoggedIn()}
  },

  render() {
    return (
      <div className="homepage">
        { !this.state.authenticated ? (
          <h2>Log in to view your projects</h2>
        ) : (
          <h2>Click on a project to see a project</h2>
        )}
      </div>
    );
  }
})
