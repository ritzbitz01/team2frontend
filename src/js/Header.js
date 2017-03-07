import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Header, Brand } from 'react-bootstrap';
import {Link, browserHistory} from 'react-router';
import LoggedInHeader from './LoggedInHeader';
import LoggedOutHeader from './LoggedOutHeader';
import LoginStore from '../stores/LoginStore';

export default React.createClass({

  getInitialState() {
    return {
      authenticated: LoginStore.isLoggedIn()
    }
  },

  getLoggedIn() {
    this.setState({authenticated: LoginStore.isLoggedIn()});
  },

  componentDidMount() {
    LoginStore.addChangeListener(this._onChange);
  },

  _onChange: function() {
    console.log('HEADER ON CHANGE HIT');
    this.setState({authenticated: LoginStore.isLoggedIn()});
  },

  render() {
    var header;
    if(this.state.authenticated) {
      header = <LoggedInHeader />
    } else {
      header = <LoggedOutHeader />
    }
    return (
      <div>
      {header}
      </div>
    );
  }
})
