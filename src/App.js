import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import NoPage from './pages/nopage';
import Navbar from './navbar';
import './App.css';
import './styles.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={(<><Navbar /><Register /></>)} />
          <Route path='/login' element={(<><Navbar /><Login /></>)} />
          <Route path='/' element={(<><Navbar /><Home /></>)} />
          <Route path="*" element={(<><Navbar /><NoPage /></>)} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
