import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import Icon from "../components/icon";
import { FaArrowLeft, FaRegBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate=useNavigate()
  const [selected,setSelected]=useState<string|null>(null)
  const notifications=[
    {
      title:'Notification Title',
      day: 'fri',
      time:'20:40 pm',
      id:'1'
    },
    {
      title: 'Notification Title',
      day: 'fri',
      time: '20:40 pm',
      id: '12'
    },
    {
      title: 'Notification Title',
      day: 'fri',
      time: '20:40 pm',
      id: '3'
    },
    {
      title: 'Notification Title',
      day: 'fri',
      time: '20:40 pm',
      id: '4'
    }

  ]
  return (
    <Sidebar>
      <div className='flex flex-col justify-start w-full h-full bg-white rounded-xl px-4'>
        <div className="flex flex-row justify-start items-center border-b p-4 mb-2">
          <Icon icon={FaArrowLeft} onClick={()=>navigate(-1)}></Icon><h2 className="px-4">Notifications</h2>
        </div>
          {
          notifications.map((notification)=>{
            return <div className={`flex flex-row p-2 rounded-lg ${selected===notification.id?'bg-blue-800 text-white':'border-b'}`} onClick={()=>{setSelected(notification.id)}}>
              <div className="flex flex-row items-center w-full h-[50px] justify-start">
                <div className={`flex flex-row items-center justify-center h-[40px] w-[40px] rounded-full bg-white border ${selected===notification.id? 'border-blue-800':'border-black'}`}>
                  <Icon  icon={FaRegBell} className={`${selected===notification.id?'text-blue-800':'text-black'}`}></Icon>
                </div>
                <div className="flex flex-col items-start justify-around p-2">
                  <h3>{notification.title}</h3>
                  <p className={`text-xs  ${selected===notification.id?'text-white':'text-gray-800'}`}>{notification.day+','+notification.time}</p>
                </div>
              </div> 

            </div>

          })
          }


      </div>
    </Sidebar>
  );
};

export default Notifications;
