import { createContext } from 'react';
import './App.css';
import ComA from './Component/ComA';
import Navbar from './Component/Navbar';

const MyName = createContext();

function App() {
  let lastName = "Siddiqui";
  return (
    <>
      <MyName.Provider value={lastName}>
      <div>
        <Navbar/>
        <div className="main">
          <ComA />
        </div>
      </div>
      </MyName.Provider>
    </>
  );
}

export {MyName}
export default App;
