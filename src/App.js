import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FormOrder from './components/FormOrder/FormOrder';

function App() {
  return (
    <div className="app-container">
      <Header />
      <FormOrder/>
    </div>
  );
}

export default App;
