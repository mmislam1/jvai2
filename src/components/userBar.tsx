import React from 'react'
import { IconType } from 'react-icons'
import { FaRegBell } from 'react-icons/fa'
import { Navigate,Link } from 'react-router-dom'
import Icon from './icon'


const UserBar : React.FC=() => {
    const BellIcon:IconType=FaRegBell
  return (
    <div className="flex flex-row items-center justify-between p-6 rounded-lg shadow-lg h-[94px]  bg-white mx-4 my-2">
        <div className="flex flex-col items-left justify-center pl-2">
            <h2 className="text-black text-2xl">Welcome Sharon</h2>
            <p className="text-gray-500 text-sm"> Have a nice day!</p>
        </div>
        <div className="flex items-center justify-start p-4">
            <Link to='/notifications'>
              <Icon icon={FaRegBell}></Icon>
            </Link>
            <img src="/jvai.jpg" alt="person" className="h-[40px] w-[40px] rounded-[50%] mx-4" />
            <h3 className="text-black text-md mx-4">Sharon</h3>
        </div>
    </div>
  )
}

export default UserBar