import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import '../css/base.css'
import '../css/bootstrap.min.css'


export default React.createClass ({
	getInitialState() {
		return {critvalue: ''}
	},
	handleChange: function(event) {
		this.setState({critvalue: event.target.value});
	},
	handleClick: function(event) {
		var postData = {'userId':this.state.critvalue};
		var postUrl = this.props.url + "/users/" + this.props.clientUserId + "/requests?userId= " + this.state.critvalue;
		$.ajax({
			headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    	},
			type: 'post',
      url: postUrl,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
        clearInput();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
	},
	clearInput() {
		this.setState({ critvalue: ""});
	},
  render: function() {
    return (
      <form className="criteriaForm" onSubmit={this.handleSubmit}>
        <FormGroup controlId="criteriaInput">
          <ControlLabel>Enter User Id to delete</ControlLabel>
          <FormControl type="text" value={this.state.critvalue} placeholder="Enter User Id" onChange={this.handleChange}/>
        </FormGroup>
        <Button bsStyle="primary" disabled={!this.state.critvalue} onClick={this.handleClick}>Delete</Button>
      </form>
    );
  }
})
