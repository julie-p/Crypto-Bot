import React from 'react';
import './App.css';
import List from './Pages/List';
import Chart from './Pages/Chart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (

    <Router>
      <Switch>
        <Route path='/' exact component={List}/>
        <Route path='/chart' component={Chart}/>
      </Switch>
    </Router>

  )
};

export default App;
