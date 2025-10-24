import React from 'react'
import { useLocation } from 'react-router-dom'


const items=[
    {
        title:'Dashboard',
        link:'/',
        logo:''
    },
    {
        title:'User Management',
        link:'/user',
        logo:''
    },
    {
        title:'Subscription & Billing',
        link:'/subscription',
        logo:''
    },
    {
        title:'Content Moderation',
        link:'/content',
        logo:''
    },
    {
        title:'Add Course',
        link:'/add_course',
        logo:''
    },
    {
        title:'Settings',
        link:'/settings',
        logo:''
    }
]


const Sidebar = () => {
    const loc=useLocation()
  
  return (
    <div className='flex flex-col p-4 h-[100vh] w-[300px] shadow-md'>
        <div className="flex flex-col gap-6 ">
            {items.map((item)=>{
                const isActive= loc.pathname===item.link
              return (<div className={`w-full h-[50px] flex flex-row items-center justify-start ${!isActive?'text-gray-600':'text-white'} p-6 ${isActive?'bg-[rgba(19,76,156,1)]':''} rounded-lg`}>
                <h2>{item.title}</h2>
              </div>)  
            })}
            
        </div>
    </div>
  )
}

export default Sidebar