import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">






<Router>
      <div className="navbar">
      <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
</Router>

      

    </div>
  );
}

export default App;
