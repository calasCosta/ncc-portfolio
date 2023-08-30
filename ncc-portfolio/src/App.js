import React from 'react';
import {BrowserRouter, HashRouter, Routes, Route} from 'react-router-dom'; 
import './styles/App.scss';
import Home from './pages/Home';
import Project from './pages/Project';

function App() {
  return (
    <HashRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/ncc-portfolio/project/:index/:title" element={<Project />}/>
        </Routes>
    </HashRouter>
  );
}

export default App;
