import React, { Component } from 'react';
import WorldWriterService from '../services/WorldWriterService'
import {ListGroup, ListGroupItem, PanelGroup, Panel, Grid, Row, Col, Button} from 'react-bootstrap'

export default React.createClass({
  getInitialState() {
    return {
      error: false,
      activeCharKey: '1',
      activeSetKey: '1',
      projectName: '',
      characters: [],
      chapters: []

    };
  },

  getProjectDetails() {

  },

  handleCharacterSelect(activeCharKey) {
    this.setState({ activeCharKey });
  },

  handleSettingSelect(activeSetKey) {
    this.setState({ activeSetKey });
  },

  render() {
    return (
      <div className="projectLayout">
      <div className="projectTitle">
          <h1>Project id: {this.props.params.projectID}</h1>
      </div>
      <Grid fluid={true}>
        <Row className="show-grid">
          <Col sm={3} md={3}>
            <h2>Stories</h2>
            <Button>Add Story</Button>
            <ListGroup>
              <ListGroupItem header="Story 1">The Beginning</ListGroupItem>
              <ListGroupItem header="Story 2">The Middle</ListGroupItem>
              <ListGroupItem header="Story 3">The End</ListGroupItem>
            </ListGroup>
          </Col>
          <Col sm={6} md={6}>
            <p>Select a Story for a Preview</p>
          </Col>
          <Col sm={3} md={3}>
            <div className="projectCharacterDiv">
              <h2>Characters</h2>
              <Button>Add Character</Button>
              <PanelGroup activeKey={this.state.activeCharKey} onSelect={this.handleCharacterSelect} accordion>
                <Panel header="Character 1" eventKey="1">Character 1 content</Panel>
                <Panel header="Character 2" eventKey="2">Character 2 content</Panel>
              </PanelGroup>
            </div>
            <br/>
            <div className="projectSettingsDiv">
              <h2>Settings</h2>
              <Button>Add Setting</Button>
              <PanelGroup activeKey={this.state.activeSetKey} onSelect={this.handleSettingSelect} accordion>
                <Panel header="City 1" eventKey="1">City 1 content</Panel>
                <Panel header="City 2" eventKey="2">City 2 content</Panel>
              </PanelGroup>
            </div>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
})
