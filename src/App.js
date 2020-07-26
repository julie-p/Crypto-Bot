import React from 'react';
import './App.css';
import List from './Pages/List';
import Chart from './Pages/Chart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import data from './reducers/data.reducer';
import total from './reducers/total.reducer';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

const store = createStore(combineReducers({data, total}));

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={List}/>
          <Route path='/chart' component={Chart}/>
        </Switch>
      </Router>
    </Provider>
  )
};

export default App;
