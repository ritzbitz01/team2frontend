import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Login from './src/js/Login'
import Projects from './src/js/Projects'
import Logout from './src/js/Logout'
import Signup from './src/js/Signup'
import App from './src/js/App'
import Home from './src/js/Home'
import MyAccount from './src/js/MyAccount'
import ProjectCreate from './src/js/ProjectCreate'
import Project from './src/js/Project'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/projectcreate" component={ProjectCreate}/>
      <Route path="/myaccount" component={MyAccount}/>
      <Route path="/project/:projectID" component={Project} />
      <Route path="/user/:userId" component={MyAccount} />
    </Route>
  </Router>
), document.getElementById('content'))
