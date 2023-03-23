import './App.css';
import Navbar from './Component/Navbar';
import ShortCirEval from './Component/ShortCirEval';

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <div className="main">
          <ShortCirEval />
        </div>
      </div>
    </>
  );
}

export default App;
