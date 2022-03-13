
import './App.css';
import React from 'react';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard name= {"Doe, Jane"}  age= {88} hairColor = {"brown"}  />
        <PersonCard name = {"Smith, John"} age={89} hairColor = {"black"} />
        <PersonCard name = {"Lewis, John"} age={29} hairColor = {"Blue"} />
    </div>
  );
}

export default App;
