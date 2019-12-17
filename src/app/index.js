import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import '../App.css';
import { Header, OrderWrapper, OrderList, Login } from '~components';
import { MainContainer } from '~screens';

function App() {
  return (
    <Router>
      <Switch>
        {
          window.location.pathname === '/' ? '':<Header/>
        }
        <Route path='/'>
          <MainContainer/>
        </Route>
        <Route path='/admin/orders'>
          <OrderWrapper/>
        </Route>
        <Route exact path='/admin'>
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
