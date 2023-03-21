import { useState } from 'react';
import './App.css';

function App() {
  const [newObj , setNewObj] = useState({
    name : "Ahmer",
    age : 20,
    degree : "BS-CS"
  })
  const updateFunc = () =>{
    setNewObj({...newObj,name:"Ahmer Siddiqui"})
  }
  return (
    <>
      <div>
        <h1>My Name is {newObj.name} and my age is {newObj.age}.I have degree of {newObj.degree}</h1>
        <button onClick={updateFunc}>Update</button>
      </div>
    </>
  );
}

export default App;
