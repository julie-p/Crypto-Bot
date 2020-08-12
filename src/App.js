import React from 'react';
import './App.css';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import List from './Pages/List';
import Chart from './Pages/Chart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import data from './reducers/data.reducer';
import total from './reducers/total.reducer';
import loading from './reducers/loader.reducer';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const store = createStore(combineReducers({data, total, loading}));

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={SignIn}/>
          <Route path='/signup' exact component={SignUp}/>
          <Route path='/list' component={List}/>
          <Route path='/chart' component={Chart}/>
        </Switch>
      </Router>
    </Provider>
  )
};

export default App;
