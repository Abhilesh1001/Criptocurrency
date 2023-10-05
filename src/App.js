import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Defi from './component/defi/Defi';


function App() {
  return (
    <>
    <div  style={{backgroundColor: 'green'}}>
      <div style={{margin:"20px"}}>
      <Navbar />
      </div>
      <Defi />
    </div>
    
    
    </>
    
  );
}

export default App;
