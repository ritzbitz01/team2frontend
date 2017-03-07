import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import ServiceList from './ServiceList';
import '../css/base.css'
import '../css/bootstrap.min.css'

export default React.createClass ({
  getInitialState() {
    return {open: false}
  },
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div className="history">
        <Accordion>
          <Panel header={this.props.requestId} eventKey={this.props.requestId}>
            <div>
         			<h5>Request Date: {this.props.requestDate}</h5>
              <h5>Delete Criteria: {this.props.criteria}</h5>
              <ServiceList data={this.props.services}/>
      		  </div>
          </Panel>
        </Accordion>
      </div>
    );
  }
})
