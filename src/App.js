import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Wallet from './Pages/Wallet';
import Chart from './Pages/Chart';
import Error from './Pages/Error';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from "./Auth";
import PrivateRoute from './PrivateRoute';

import amount from './reducers/amount.reducer';
import data from './reducers/data.reducer';
import total from './reducers/total.reducer';
import loading from './reducers/loader.reducer';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
const store = createStore(combineReducers({amount, data, total, loading}));

function App() {

  const [ lightMode, setLightMode ] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem("light", JSON.stringify(lightMode));
  }, [lightMode]);

  function getInitialMode() {
    const isReturningUser = "light" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("light"));
    const userPrefersLight = getPrefColorScheme();
    
    if (isReturningUser) {
      // si le mode a été sauvegardé --> dark / light
      return savedMode;
    } else if (userPrefersLight) {
      // si thème préféré est light --> light
      return true;
    } else {
      // sinon --> dark
      return false;
    }
  };

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: light)").matches;
  };

  return (
      <AuthProvider>

        <div className={lightMode ? "App light-mode" : "App"}>
          <div className="nav-title">
            <div className="logo-title">
                <FontAwesomeIcon icon={faRobot} className="logo-icon" />
                <span className="app-name">CryptoBot</span>
            </div>
            <button 
                className="btn-toggle" 
                onClick={() => setLightMode(prevMode => !prevMode)}>
                {lightMode ?
                <FontAwesomeIcon icon={faMoon} />
                :
                <FontAwesomeIcon icon={faSun} />
                }   
            </button>
        </div>

          <Provider store={store}>
            <Router>
              <Switch>
                <Route path='/' exact component={SignIn}/>
                <Route path='/signup' component={SignUp}/>
                <PrivateRoute  path='/wallet' component={Wallet}/>
                <PrivateRoute  path='/chart' component={Chart}/>
                <Route component={Error}></Route>
              </Switch>
            </Router>
          </Provider>

        </div>

      </AuthProvider>
    
  )
};

export default App;
