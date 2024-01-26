import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardClient from './components/Dashboard/DashboardClient';
import { Login, Signup } from './components/Login/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardClient />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
