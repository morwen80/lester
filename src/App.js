import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
      <Router>
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component={PageNotFound} />
          </Switch>
      </Router>
  );
}

export default App;
