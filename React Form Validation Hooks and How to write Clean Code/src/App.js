import './App.css';
import BasicForm from './Component/BasicForm';
import Navbar from './Component/Navbar';

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <div className="main">
          <BasicForm />
        </div>
      </div>
    </>
  );
}

export default App;
