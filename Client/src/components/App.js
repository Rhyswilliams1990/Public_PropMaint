import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NavBar from './core/NavBar';
import PrivateRoute from '../utils/PrivateRoute';
import history from '../utils/history';
import PeopleLandingPage from '../pages/people/LandingPage';
import './App.css';

const App = () => (
  <>
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route path="/" exact />
        <PrivateRoute path="/people" component={PeopleLandingPage} />
      </Switch>
    </Router>
  </>
);

export default App;
