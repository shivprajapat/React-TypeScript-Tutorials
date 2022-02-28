import React from 'react';
import './App.css';
import { Greet } from './components/Greet';

function App() {

  function shiv(a: number, b: number) {
    return a + b
  }
  return (
    <div className="App">
      <Greet name="Shiv" num={shiv(10, 20)} />
    </div>
  );
}

export default App;
