import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom'; 
import './styles/App.scss';
import Home from './pages/Home';
import Project from './pages/Project';

function App() {
  return (
    <HashRouter >
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/project/:index/:title" element={<Project />}/>
        </Routes>
    </HashRouter>
  );
}

export default App;
