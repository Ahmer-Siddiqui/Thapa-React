import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const [text , setText] = useState("Ahmer Aqeel");
  const changeText  = ()=>{
    setText("Ahmer Siddiqui")
  }
  return (
    <>
      <div className="App">
      <Navbar/>
        <div className='main'>
          <h1>{text}</h1>
          <button onClick={changeText}>Click Me</button>
        </div>
      </div>
    </>
  );
}

export default App;
