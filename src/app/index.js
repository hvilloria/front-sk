import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import '../App.css';
import { Header, OrderWrapper, OrderList, Login } from '~components';

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
        <Route path='/login'>
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
