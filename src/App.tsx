import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Layot } from './components/Layot/Layot';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Crew } from './components/Crew/Crew';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Layot />}>
        <Route index element={<Home />}  />
        <Route path="About" element={<About />} />
        <Route path="Crew" element={<Crew />} />
      </Route>
    </Routes>
  );
}


export default App;
