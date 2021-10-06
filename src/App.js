import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import logo from './media/planet.png';
import Rocks from './componentR/Rockets';
import Missions from './componentM/Missions';
import MyProfile from './componentP/Profile';
import store from './redux/config';

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
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <Rocks />
          </Route>
          <Route path="/mission">
            <Missions />
          </Route>
          <Route path="/rockets">
            <Rocks />
          </Route>
          <Route path="/profile">
            <MyProfile />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
