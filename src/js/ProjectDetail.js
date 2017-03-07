import React from 'react';
import {Accordion, Panel, ListGroup, ListGroupItem, Jumbotron, Button } from 'react-bootstrap';
import {browserHistory} from 'react-router';
import '../css/base.css'
import '../css/bootstrap.min.css'


export default React.createClass({
  getInitialState() {
    return {open: false}
  },
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  handleClick() {
      // We also want to set the authentication state
      // for the component to true
      browserHistory.push('/project/' + this.props.projectId)
  },

  render: function() {
    return (
      <div className="projectdetail">
        <Jumbotron>
          <h1>{this.props.projectName}</h1>
          <p>{this.props.projectDescription}</p>
          <p><Button bsStyle="primary" onClick={this.handleClick}>Open Project</Button></p>
        </Jumbotron>
      </div>
    );
  }
})
