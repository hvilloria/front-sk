import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import OrderWrapper from "./components/OrderWrapper/OrderWrapper";

function App() {
  return (
    <React.Fragment>
      <Header />
      <OrderWrapper/>
    </React.Fragment>
  );
}

export default App;
