import React from 'react'
import CriteriaForm from './CriteriaForm'
import DeleteHistory from './DeleteHistory'
import '../css/base.css'
import '../css/bootstrap.min.css'

export default React.createClass ({
	render() {
		return (
			<div className="criteriaBox">
				<h1>Data Deletion Management UI</h1>
        <p> Enter the userid of the PII data to be deleted. The request will sit for a default 24 hours before being sent out to all of the systems that contain PII data. Before the 24 hours is up, the original user can cancel the delete request.</p>
				<h2> User: {this.props.user} </h2>
				<h3> Criteria </h3>
				<CriteriaForm url="http://localhost:8080/data" clientUserId={this.props.user}/>

				<DeleteHistory userId={this.props.user} url="http://localhost:8080/data/users/" />
			</div>
		);
	}
})
