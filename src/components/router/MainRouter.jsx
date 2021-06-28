import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import Settings from '../views/Settings';
import Profile from '../views/Profile';
import Mentoring from '../views/Mentoring';
import Chat from '../views/Chat';

function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/">
          <Settings />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/Mentoring">
          <Mentoring />
        </Route>
        <Route exact path="/chat">
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainRouter;
