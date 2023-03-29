import './App.css';
import Navbar from './Component/Navbar';
import UseEffect2 from './Component/useEffect2';


function App() {
  return (
    <>
      <div>
        <Navbar/>
        <div className="main">
          <UseEffect2 />
        </div>
      </div>
    </>
  );
}

export default App;
