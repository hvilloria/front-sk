import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import '../App.scss';
import { Header, OrderWrapper, OrderList, Login } from '~components';
import { MainContainer } from '~screens';
import { ProductEdition } from '~admscreens';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/admin/orders'>
          <Header/>
          <OrderWrapper/>
        </Route>
        <Route path='/admin/products'>
          <Header/>
          <ProductEdition/>
        </Route>
        <Route path='/admin'>
          <Header/>
          <OrderList/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/'>
          <MainContainer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
