import './App.css';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from './media/planet.png';
import Rocks from './componentR/Rockets';
import SomethingM from './componentM/Missions';
import MyProfile from './componentP/Profile';
import { getRock } from './redux/API';

function App() {
  const dispatch = useDispatch();
  const loadRocketsAction = bindActionCreators(getRock, dispatch);
  useEffect(() => {
    loadRocketsAction();
  }, []);
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
              <NavLink
                activeStyle={{
                  fontWeight: 'bold',
                  borderBottom: '3px solid #3895ff56',
                }}
                to="/rockets"
              >
                Rockets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{
                  fontWeight: 'bold',
                  borderBottom: '3px solid #3895ff56',
                }}
                to="/mission"
              >
                Missions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{
                  fontWeight: 'bold',
                  borderBottom: '3px solid #3895ff56',
                }}
                to="/profile"
              >
                My Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Rocks />
        </Route>
        <Route path="/mission">
          <SomethingM />
        </Route>
        <Route path="/rockets">
          <Rocks />
        </Route>
        <Route path="/profile">
          <MyProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
