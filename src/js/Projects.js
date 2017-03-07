import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import LoginStore from '../stores/LoginStore';
import ProjectList from './ProjectList';
import WorldWriterService from '../services/WorldWriterService'

export default React.createClass({
  getInitialState() {
    return {
      error: false,
      username: LoginStore.getUser(),
      data: []
    };
  },

  getProjects() {
    console.log("USERNAME " + this.state.username);
    var self = this;
    var projectList = WorldWriterService.getProjects(this.state.username);
    console.log("WTF");
    projectList.then(function(data) {
      console.log("GET PROJECTS SUCCESS");
      self.setState({data: data.projects});
    }).catch(function(err) {
      console.log("GET PROJECTS FAILED" + err);
      return self.setState({ error: true })
    })
  },

  handleClick(event) {

    event.preventDefault()
    browserHistory.push('/projectcreate')

  },

  componentDidMount: function() {
	    this.getProjects();
	},

  render() {
    return (
      <div>
        <div className="projectListHeader">
          <h1>List of Projects you are a part of</h1>
          <Button bsStyle="primary" onClick={this.handleClick}>
            Create Project
          </Button>
        </div>
        <div className="projectList">
          <ProjectList data={this.state.data} />
        </div>

      </div>
    );
  }
})
