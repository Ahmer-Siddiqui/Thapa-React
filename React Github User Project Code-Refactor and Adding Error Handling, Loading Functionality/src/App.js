import './App.css';
import Navbar from './Component/Navbar';
import UseEffectApi from './Component/UseEffectApi';


function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="main">
          <UseEffectApi />
        </div>
      </div>
    </>
  );
}

export default App;
