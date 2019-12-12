import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import '../App.css';
import { Header, OrderWrapper, OrderList } from '~components';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/orders'>
          <OrderWrapper/>
        </Route>
        <Route exact path='/'>
          <OrderList/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
