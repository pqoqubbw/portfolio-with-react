import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  NavBar,
  Home,
  About,
  Skills,
  Works,
  Contact,
  Footer,
} from './components';

import './app.css';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
