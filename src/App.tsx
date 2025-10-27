import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard'
import ResetPassWord from './pages/resetPassword';
import ForgotPassword from './pages/forgotPassword';
import VerifyEmail from './pages/verifyEmail';
import Settings from './pages/settings';
import AddCourse from './pages/addCourse';
import ContentModeration from './pages/contentModeration';
import SubscriptionAndBilling from './pages/subscriptionAndBilling';
import UserManagement from './pages/userManagement';
import Notifications from './pages/notifications';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/resetPassword" element={<ResetPassWord/>} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/verifyEmail" element={<VerifyEmail />} />
      <Route path="/userManagement" element={<UserManagement />} />
      <Route path="/subscriptionAndBilling" element={<SubscriptionAndBilling />} />
      <Route path="/contentModeration" element={<ContentModeration />} />
      <Route path="/addCourse" element={<AddCourse />} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/notifications" element={<Notifications/>} />
    </Routes>
  );
}

export default App;
