import './App.css';
import Navbar from './Component/Navbar';
import UseEffect from './Component/UseEffect';


function App() {
  return (
    <>
      <div>
        <Navbar/>
        <div className="main">
          <UseEffect />
        </div>
      </div>
    </>
  );
}

export default App;
