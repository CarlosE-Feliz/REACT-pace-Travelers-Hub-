import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import logo from './media/planet.png';
import Something from './componentR/Rockets';
import SomethingM from './componentM/Missions';
import MyProfile from './componentP/Profile';

function App() {
  return (
    <Router>
      <div className="header">
        <nav className="nav-bar flex">
          <div className="logo flex">
            <img src={logo} className="img-logo" alt="Logo" />
            <h3>Space Travalers Hub</h3>
          </div>
          <ul className="flex ul-nav">
            <li className="nav-item">
              <Link to="/rockets">Rockets</Link>
            </li>
            <li className="nav-item">
              <Link to="/mission">Missions</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile">My Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Something />
        </Route>
        <Route path="/mission">
          <SomethingM />
        </Route>
        <Route path="/rockets">
          <Something />
        </Route>
        <Route path="/profile">
          <MyProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
