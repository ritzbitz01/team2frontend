import React, { Component } from 'react';
import {Link} from 'react-router';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import LoginStore from '../stores/LoginStore'
import Header from './Header'
import '../css/base.css'
import '../css/bootstrap.min.css'

export default React.createClass({
  getInitialState() {
     return {
       loggedIn: LoginStore.isLoggedIn()
     }
   },

   render() {
     return (
       <div>
        <Header/>

         {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
       </div>
     )
   }
})
