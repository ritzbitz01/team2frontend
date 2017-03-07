import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Header, Brand } from 'react-bootstrap';
import LoginStore from '../stores/LoginStore'
import {Link, browserHistory} from 'react-router';

export default React.createClass({

  getInitialState() {
    return {
      authenticated: LoginStore.isLoggedIn()
    }
  },

  login() {
      // We also want to set the authentication state
      // for the component to true
      this.setState({authenticated: true});
      browserHistory.push('/login')
  },

  signup() {
    browserHistory.push('/signup')
  },

  projects() {
    browserHistory.push('/projects');
  },

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">World Writer</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem onClick={this.projects}>Projects</NavItem>

          <NavItem onClick={this.login}> Log In </NavItem>

          <NavItem onClick={this.signup}>Sign Up</NavItem>

        </Nav>
      </Navbar>
    );
  }
})
