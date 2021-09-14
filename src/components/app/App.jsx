import React from 'react';
import AnimalCrossingList from '../../containers/AnimalCrossingList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/"> Home </Link>
        </nav>
      </header>
      <Switch>
        <Route path="/:id">
          <AnimalCrossingDetail />
        </Route>
        <Route path="/">
          <AnimalCrossingList />
        </Route>
      </Switch>
    </Router>
  );
}
