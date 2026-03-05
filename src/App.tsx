import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/LandingPageExact.css';
import './styles/LoginExact.css';

// Import pages
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ChildDirectory from './pages/ChildDirectory';
import StaffDirectory from './pages/StaffDirectory';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/child-directory" element={<ChildDirectory />} />
        <Route path="/staff-directory" element={<StaffDirectory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;