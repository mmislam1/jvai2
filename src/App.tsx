import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard'
import ResetPassWord from './pages/resetPassword';
import ForgotPassword from './pages/forgotPassword';
import VerifyEmail from './pages/verifyEmail';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/resetPassword" element={<ResetPassWord/>} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/verifyEmail" element={<VerifyEmail />} />
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
