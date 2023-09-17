import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import NoPage from './pages/nopage';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className='min-h-screen relative bg-gray-100'>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
