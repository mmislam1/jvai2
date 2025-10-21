import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route
        path="/"
        element={
          <Dashboard/>
        }
      />
    </Routes>
  );
}

export default App;
