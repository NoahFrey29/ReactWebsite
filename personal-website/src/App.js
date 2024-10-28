import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import TBD from './components/pages/TBD';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tbd' element={<TBD/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
