import './App.css';
import Navbar from './Component/Navbar';
import ComA from './Component/ComA';
import { createContext } from 'react';


function App() {
  const BioData = createContext();
  return (
    <>
        <BioData.Provider value={"Ahmer Siddiqui"}>
        <div>
          <Navbar/>
          <div className="main">
            <ComA />
          </div>
        </div>
        </BioData.Provider>
      </>
  );
}

export {BioData};
export default App;
