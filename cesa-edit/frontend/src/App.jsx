

import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CouncilPage from './pages/CouncilPage';

import EventRegistration from "./pages/EventRegistration";

import { Routes, Route } from 'react-router-dom'; 
import './App.css';

function App() {
  return (
    <>
     
      <Navbar/>
       <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/council" element={<CouncilPage />} />
        <Route path="/register/:eventId" element={<EventRegistration/>} />
       
    </Routes>
      
      
    </>
  );
}

export default App;
