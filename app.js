import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import Login from './src/js/Login'
import Criteria from './src/js/Criteria'
import RouterContainer from './src/services/RouterContainer';
import LoginActions from './src/actions/LoginActions';
import AuthenticatedApp from './src/js/AuthenticatedApp';
import Menus from './src/js/Menus';
import MenuItems from './src/js/MenuItems';
import MenuMakerUI from './src/js/MenuMakerUI';

render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={AuthenticatedApp}>
          <IndexRoute component={Index}/>
          <Route path='/contact/:id' component={ContactDetail} />
        </Route>
      </Router>
    );
  }
