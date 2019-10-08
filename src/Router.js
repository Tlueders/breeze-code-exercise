/* eslint-disable import/first */
import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

// Views
import People from './views/People';
import Groups from './views/Groups';

class Routes extends Component {

  render() {

    return(
       <Router history={history}>
        <Switch>
          <Route exact path="/" component={People} />
          <Route exact path="/groups" component={Groups} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
