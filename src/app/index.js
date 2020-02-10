import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import '../App.scss';
import { Header, OrderWrapper, OrderList, Login } from '~components';
import { MainContainer } from '~screens';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/admin/orders'>
          <OrderWrapper/>
        </Route>
        <Route path='/admin'>
          <Header/>
          <OrderList/>
        </Route>
        <Route path='/'>
          <MainContainer/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
