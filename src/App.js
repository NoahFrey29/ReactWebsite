import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import TBD from './components/pages/TBD';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import HPE from './components/pages/HPE';
import WorkTermOne from './components/pages/WorkTermOne';
import WorkTermTwo from './components/pages/WorkTermTwo';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/ReactWebsite' element={<Home/>} />
          <Route path='/tbd' element={<TBD/>} />
          <Route path='/hpe' element={<HPE/>}/>
          <Route path='/work-term-one' element={<WorkTermOne/>}/>
          <Route path='/work-term-two' element={<WorkTermTwo/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
