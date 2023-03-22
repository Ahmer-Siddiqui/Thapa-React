import './App.css';
import Navbar from './Components/Navbar';
import UseStateArray from './Components/UseStateArray';
// import { useState } from 'react';

function App() {

  return (
    <>
      <div className="App">
      <Navbar/>
        <div className='main'>
          <div id='centerBox'>
            <UseStateArray />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
