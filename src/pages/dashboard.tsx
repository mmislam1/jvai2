import React from 'react'
import Sidebar from '../components/sidebar'
import UserBar from '../components/userBar'
import InfoTabs from '../components/infoTabs'
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import BarChart from '../components/BarChart';

const Dashboard = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    
      <Sidebar>
        <InfoTabs/>
        <div className="flex flex-col items-center justify-center ">
        <BarChart data={[{ label: 'may', value: 99 },{ label: 'may', value: 79 },{ label: 'may', value: 29 }]} title={'Test'}></BarChart>
        </div>
      </Sidebar>
    
  )
}

export default Dashboard