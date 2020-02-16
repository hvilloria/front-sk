import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import '../App.scss';
import { Header, OrderWrapper, OrderList, Login } from '~components';
import { MainContainer } from '~screens';
import { ProductEdition } from '~admscreens';
import { AuthContext } from '../context/auth';
import PrivateRoute from '../PrivateRoute';

function App() {
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    const user ={
      access_token: data['access-token'],
      client: data['client'],
      uid: data['uid']
    }
    localStorage.setItem('user', JSON.stringify(user));
    setAuthTokens(user);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Switch>
          <PrivateRoute path="/admin/orders" component={OrderWrapper} />
          <PrivateRoute path="/admin/products" component={ProductEdition} />
          <PrivateRoute path="/admin" component={OrderList} />
          <Route path='/login' component={Login}/>
          <Route exact path='/' component={MainContainer}/>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
