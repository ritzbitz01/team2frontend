import React from 'react';
import DataHistoryList from './DataHistoryList';
import { Button } from 'react-bootstrap';
import '../css/base.css'
import '../css/bootstrap.min.css'

export default React.createClass ({
	getInitialState: function() {
    	return {data: []};
  	},
  	handleClick: function(event) {
		this.retrieveHistory()
	},
	retrieveHistory: function() {
		var histUrl = this.props.url + this.props.userId + "/requests";
		$.ajax({
	      url: histUrl,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {

	        	this.setState({data: data.requestList});

	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(histUrl, status, err.toString());
	      }.bind(this)
	    });
	},
	componentDidMount: function() {
	    this.retrieveHistory();
	},
	render: function() {
    return (
			<div className="deleteHistory">
				<h2>Delete History for {this.props.userId}</h2>
				<Button bsStyle="primary" onClick={this.handleClick}>Retrieve History</Button>
        <h3>Requests</h3>
				<DataHistoryList data={this.state.data} />
			</div>
		)
	}
})
