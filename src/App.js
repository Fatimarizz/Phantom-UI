import './App.css';
import {  Routes, Route } from "react-router-dom";
import  Navbar from './components/navbar';
import Secondpage from './components/secondpage';
import Footer from './components/footer';
import { Stepspage } from './components/Stepspage';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Secondpage />}/>
      <Route path='/sec' element={<Stepspage/>}/>
       </Routes> 
        <Footer/>
    </div>
  );
}

export default App;
