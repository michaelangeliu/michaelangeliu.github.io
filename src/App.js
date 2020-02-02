import React from 'react';
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import './App.scss';

import About from './pages/About';
import Home from './pages/Home';
import Resume from './pages/Resume';

function App() {
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
}

export default App;