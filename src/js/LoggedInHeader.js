import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Header, Brand } from 'react-bootstrap';
import {Link, browserHistory} from 'react-router';
import LoginStore from '../stores/LoginStore';
import AuthService from '../services/AuthService';

export default React.createClass({

  getInitialState() {
    return {
      authenticated: LoginStore.isLoggedIn()
    }
  },

  logout() {
    AuthService.logout();
    this.setState({authenticated: false});
    browserHistory.push('/')
  },

  projects() {
    browserHistory.push('/projects');
  },

  myaccount() {
    browserHistory.push('/myaccount');
  },

  render() {
    var user = LoginStore.getUser();
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">World Writer</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem>Welcome, {user}</NavItem>
          <NavItem onClick={this.projects}>Projects</NavItem>
          <NavItem onClick={this.myaccount}>My Account</NavItem>
          <NavItem onClick={this.logout}>Logout</NavItem>
        </Nav>
      </Navbar>
    );
  }
})
