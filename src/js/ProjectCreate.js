import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import AuthService from '../services/AuthService'
import WorldWriterService from '../services/WorldWriterService'
import LoginStore from '../stores/LoginStore'
import '../css/base.css'
import '../css/bootstrap.min.css'

export default React.createClass({

  getInitialState() {
    return {
      error: false,
      projectname: '',
      projectowner: LoginStore.getUser(),
      projectdescription: '',
      projectprivacy: ''
    };
  },

  getValidationState() {
    const length = this.state.projectname.length;
    if(length == 0) return 'error';
    else return 'success';
  },

  handleProjectNameChange(e) {
    this.setState({ projectname: e.target.value });
  },

  handleProjectOwnerChange(e) {
    this.setState({ projectowner: e.target.value });
  },

  handleProjectDescriptionChange(e) {
    this.setState({ projectdescription: e.target.value});
  },

  handleProjectPrivacyChange(e) {
    this.setState({ projectprivacy: e.target.value });
  },

  handleSubmit(event) {

    event.preventDefault()

    var self = this;

    var created = WorldWriterService.createProject(
      this.state.projectOwner,
      this.state.projectname,
      this.state.projectdescription,
      this.state.projectowner,
      this.state.projectprivacy);
    created.then(function(data) {
      console.log('SHOULD BE GOING TO PROJECTS');
      browserHistory.push('/projects')
    }).catch(function(err) {
      return self.setState({ error: true })
    })

  },

  render() {
    return (
      <div className="project-create-page">
        <div className="form">
          <form className="create-form" onSubmit={this.handleSubmit}>
            <h2>Project Creation</h2>
            <FormGroup
              validationState={this.getValidationState()}
            >
              <ControlLabel>Project Name</ControlLabel>
              <FormControl
                id="formControlsText"
                type="text"
                label="Project Name"
                placeholder="Enter Project Name"
                onChange={this.handleProjectNameChange}
              />
            </FormGroup>
            <ControlLabel>Project Description</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" onChange={this.handleProjectDescriptionChange}/>
            <ControlLabel>Project Privacy</ControlLabel>
            <FormControl componentClass="select" placeholder="private" onChange={this.handleProjectPrivacyChange}>
              <option value="private">private</option>
              <option value="public">public</option>
            </FormControl>
            <ControlLabel>Project Owner</ControlLabel>
            <FormControl
              id="formProjectOwner"
              type="text"
              disabled='true'
              placeholder={this.state.projectowner}
              onChange={this.handleProjectOwnerChange}
            />
            <Button type="submit" disabled={(
              !this.state.projectname)} bsStyle="primary" block>
              Submit
            </Button>
            {this.state.error && (
              <p>Service Error</p>
            )}
          </form>
        </div>
      </div>
    );
  }
})
