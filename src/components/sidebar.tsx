import React, { ReactNode } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { useLocation, Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { IconType } from 'react-icons';
import UserBar from './userBar';
import { useDispatch } from 'react-redux';
import { logout } from '../store/features/authSlice';


interface SidebarProps {
  children: ReactNode;
}

interface Item {
  id: number;
  title: string;
  link: string;
  logo?: IconType;
}

const items: Item[] = [
  {
    id: 1,
    title: 'Dashboard',
    link: '/',
    logo: FaHome,
  },
  {
    id: 2,
    title: 'User Management',
    link: '/user',
    logo: FaHome
  },
  {
    id: 3,
    title: 'Subscription & Billing',
    link: '/subscription',
    logo: FaHome
  },
  {
    id: 4,
    title: 'Content Moderation',
    link: '/content',
    logo: FaHome
  },
  {
    id: 5,
    title: 'Add Course',
    link: '/add_course',
    logo: FaHome
  },
  {
    id: 6,
    title: 'Settings',
    link: '/settings',
    logo: FaHome
  }
]


const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const loc = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="flex flex-row ">
      <div className="flex flex-col p-4 h-[100vh] w-[300px] shadow-md">
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col items-center justify-center mt-10 mb-4">
            {(FaHome as React.FC).call(null, { className: 'text-[rgba(19,76,156,1)] w-[60px] h-[60px]' })}

            <h1 className='text-[rgba(0, 0, 0, 1)] text-2xl'>Learning App</h1>
          </div>
          {items.map((item) => {
            const isActive = loc.pathname === item.link;
            const IconComponent = item.logo as React.ComponentType<{ className?: string }>;
            return (
              <NavLink key={`${item.id}`} to={`${item.link}`}>
                <div
                  className={`w-full h-[50px] flex flex-row items-center justify-start ${!isActive ? "text-gray-500" : "text-white"
                    } p-4 ${isActive ? "bg-[rgba(19,76,156,1)]" : ""} rounded-lg`}
                >
                  <IconComponent className={`p-2 ${isActive ? 'text-white' : 'text-gray-500'} w-[40px] h-[40px]`} />
                  <h2>{item.title}</h2>
                </div>
              </NavLink>
            );
          })}
        </div>
        <div className='flex flex-col items-center justify-end flex-1 pb-4'>
          <button onClick={() => { dispatch(logout()); navigate('/login') }}>
            <h3 className='text-red-600'>Log Out</h3>
          </button>
        </div>
      </div>
      <div className="flex flex-col p-2 bg-[rgba(19,76,156,.1)] w-[calc(100vw-300px)]">
        <UserBar></UserBar>
        <div className="flex flex-row flex-1 items-start justify-between rounded-lg shadow-lg mx-4 my-2">
          {children}
        </div>

      </div>
    </div>
  );
}

export default Sidebar