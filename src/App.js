import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import DevelopmentPage from './development/DevelopmentPage';
import Portfolio from './development/Portfolio'
import {BrowserRouter, Routes, Route } from "react-router-dom"; 
import NavBar from './development/NavBar';
function App() {
  return (
    <div className="App">

      <NavBar></NavBar>
       <Routes>

        <Route path="/" element={ <DevelopmentPage/> } />
        <Route path="/portfolio" element={<Portfolio />} />
    
  </Routes>
    </div>
  );
}

export default App;
