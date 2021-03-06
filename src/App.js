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
import Rockets from './componentR/Rockets';
import Missions from './componentM/Missions';
import MyProfile from './componentP/Profile';
import { getRock } from './redux/rocketsAPI';
import { getMissions } from './redux/missionsAPI';

function App() {
  const dispatch = useDispatch();
  const loadRocketsAction = bindActionCreators(getRock, dispatch);
  const loadMissionsAction = bindActionCreators(getMissions, dispatch);

  useEffect(() => {
    loadRocketsAction();
    loadMissionsAction();
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
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
          <Rockets />
        </Route>
        <Route path="/mission">
          <Missions />
        </Route>
        <Route path="/rockets">
          <Rockets />
        </Route>
        <Route path="/profile">
          <MyProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
