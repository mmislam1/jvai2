import React from 'react'
import Sidebar from '../components/sidebar'
import UserBar from '../components/userBar'
import InfoTabs from '../components/infoTabs'
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    
      <Sidebar>
        <InfoTabs/>
      </Sidebar>
    
  )
}

export default Dashboard