import React, { useState } from 'react';
import './App.css';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import List from './Pages/List';
import Chart from './Pages/Chart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from "./Auth";
import PrivateRoute from './PrivateRoute';

import data from './reducers/data.reducer';
import total from './reducers/total.reducer';
import loading from './reducers/loader.reducer';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const store = createStore(combineReducers({data, total, loading}));

function App() {

  return (
      <AuthProvider>
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
      </AuthProvider>
    
  )
};

export default App;
