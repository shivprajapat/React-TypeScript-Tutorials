import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {

  const personName = {
    first: "Bruce",
    last: "Wayne"
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne"
    }, {
      first: "Clark",
      last: "Kent"
    }, {
      first: "Princess",
      last: "Diana"
    }
  ]
  return (
    <div className="App">
      <Person name={personName} />
      <PersonList names={nameList} />
      <Greet name="Shiv" messageCount={20} isLoggedIn={true} />
    </div>
  );
}

export default App;
