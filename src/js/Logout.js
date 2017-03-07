import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import '../css/base.css'
import '../css/bootstrap.min.css'

export default React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    this.context.router.push('/login')
  },

  render() {
    return (
      <div className="logout-page">
        <h1> You have been logged out </h1>
        <Button type="submit" onClick={this.handleSubmit} bsStyle="primary" block>
          Login
        </Button>
      </div>
    );
  }
})
