import './App.css';
import Navbar from './Component/Navbar';
import UnControlled from './Component/UnControlled';


function App() {
  return (
    <>
      <div>
        <Navbar/>
        <div className="main">
          <UnControlled />
        </div>
      </div>
    </>
  );
}

export default App;
