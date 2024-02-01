// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ShowList from './components/ShowList.js/ShowList';
import ShowDetails from './components/ShowDetails/ShowDetails';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/details/:id" element={<ShowDetails />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
