import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import OrderWrapper from "./components/OrderWrapper/OrderWrapper";
import OrderList from "./components/OrderList/OrderList";

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
