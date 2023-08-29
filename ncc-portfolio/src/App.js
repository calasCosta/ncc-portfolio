import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import './styles/App.scss';
import Home from './pages/Home';
import Project from './pages/Project';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/project/:index/:title" element={<Project />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
