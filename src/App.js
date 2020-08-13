import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from "./Auth";
import PrivateRoute from './PrivateRoute';

import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import List from './Pages/List';
import Chart from './Pages/Chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import data from './reducers/data.reducer';
import total from './reducers/total.reducer';
import loading from './reducers/loader.reducer';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const store = createStore(combineReducers({data, total, loading}));

function App() {

  const [ darkMode, setDarkMode ] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    // si le mode a été sauvegardé --> dark / light
    if (isReturningUser) {
      return savedMode;
      // si theme préféré est dark --> dark
    } else if (userPrefersDark) {
      return true;
      // sinon --> light
    } else {
      return false;
    }
  };

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  return (
      <AuthProvider>

        <div className={darkMode ? "App light-mode" : "App"}>
          <div className="nav-title">
            <div className="logo-title">
                <FontAwesomeIcon icon={faRobot} className="logo-icon" />
                <span className="app-name">CryptoBot</span>
            </div>
            <button 
                className="btn-toggle" 
                onClick={() => setDarkMode(prevMode => !prevMode)}>
                {darkMode ?
                <FontAwesomeIcon icon={faSun} className="logo-sun" />
                :
                <FontAwesomeIcon icon={faMoon} className="logo-moon" />
                }   
            </button>
        </div>

          <Provider store={store}>
            <Router>
              <Switch>
                <Route path='/' exact component={SignIn}/>
                <Route path='/signup' component={SignUp}/>
                <PrivateRoute  path='/list' component={List}/>
                <PrivateRoute  path='/chart' component={Chart}/>
              </Switch>
            </Router>
          </Provider>

        </div>

      </AuthProvider>
    
  )
};

export default App;
