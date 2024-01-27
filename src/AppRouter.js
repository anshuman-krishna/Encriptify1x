import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import SenderPage from './SenderPage';
import ReceiverPage from './ReceiverPage';


const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/Sender" component={SenderPage} />
        <Route path="/Receiver" component={ReceiverPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;