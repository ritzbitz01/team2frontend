import React from 'react';
import {Accordion, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
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

  render: function() {
    var color;
    var serviceStatus;
    var num = this.props.completeDate;
    if (this.props.completeDate > 0) {
      if(this.props.isSuccessful == 0) {
        serviceStatus = "Error";
        color = "error";
      } else {
        serviceStatus = "Completed";
        color = "success";
      }
    } else {
      if(this.props.numComplete == 0) {
        serviceStatus = "In Progress";
        color = "primary";
      } else {
        serviceStatus = "In Progress";
        color = "warning";
      }
    }
    return (
      <div className="servicedetail">
        <Accordion>
          <Panel bsStyle={color} header={this.props.serviceName} eventKey={this.props.serviceName}>
            <ListGroup fill>
              <ListGroupItem>Complete Date: {this.props.completeDate}</ListGroupItem>
              <ListGroupItem>Num Deletions: {this.props.numDeletions}</ListGroupItem>
              <ListGroupItem>Num Delete Actions: {this.props.numDeleteActions}</ListGroupItem>
              <ListGroupItem>Num Complete: {this.props.numComplete}</ListGroupItem>
              <ListGroupItem>Is Successful: {this.props.isSuccessful}</ListGroupItem>
            </ListGroup>
          </Panel>
        </Accordion>
      </div>
    );
  }
})
