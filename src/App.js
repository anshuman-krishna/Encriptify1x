import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import SenderPage from './components/SenderPage';
import ReceiverPage from './components/ReceiverPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/sender" />
        </Route>
        <Route path="/sender" component={SenderPage} />
        <Route path="/receiver" component={ReceiverPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
