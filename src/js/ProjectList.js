import '../css/base.css'
import '../css/bootstrap.min.css'

import React from 'react';
import ProjectDetail from './ProjectDetail';
import Button from 'react-bootstrap';


export default React.createClass ({
  render: function() {
    var projectList = this.props.data.map(function(projects) {
      return (
        <ProjectDetail projectId={projects.projectId}
        projectName={projects.projectName}
        projectDescription={projects.projectDescription}
        projectOwner={projects.projectOwner}
        projectPrivacy={projects.projectPrivacy} key={projects.projectId}/>
      );
    });
    if(projectList.length > 0) {
      console.log("GREATER THAN ZERO")
    } else {
      console.log("EQUALS ZERO")
    }
    return (
      <div className="projectDetail">
        {projectList}
      </div>
    );
  }
})
