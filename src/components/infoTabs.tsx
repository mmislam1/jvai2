import React from 'react'
import Icon from './icon'
import { FaCrown } from 'react-icons/fa'
import { IconType } from 'react-icons'

interface data {
    title?: string | '',
    info?: string | '',
    icon?: IconType ,
    color?: string | ''
}

const data: data[] = [
    {
        title: 'Monthly Revenue',
        info: '$12,101',
        icon: FaCrown,
        color: 'rgba(19,76,156,1)'
    },
    {
        title: 'Monthly Revenue',
        info: '$12,101',
        icon: FaCrown,
        color: 'rgba(151, 19, 156, 1)'
    },
    {
        title: 'Monthly Revenue',
        info: '$12,101',
        icon: FaCrown,
        color: 'rgba(19, 156, 99, 1)'
    },
    {
        title: 'Monthly Revenue',
        info: '$12,101',
        icon: FaCrown,
        color: 'rgba(156, 19, 19, 1)'
    },

]

const InfoTabs = () => {
    return (
        <div className="flex flex-row gap-6 md:items-center justify-between flex-wrap w-full">
            {data.map((item) => {
                return (
                    <div className="flex flex-row p-2 rounded-xl bg-white items-center justify-center h-[144px] w-full md:w-[368px] ">
                        <div className="flex flex-[2] h-full bg-white items-center justify-center ">
                            <div className={`flex flex-row items-center justify-center rounded-xl h-[100px] w-[100px]`} style={{ backgroundColor: item.color, opacity:.2}}>
                                <Icon icon={FaCrown}></Icon>
                            </div>
                        </div>
                        <div className="flex flex-col flex-[3] h-full bg-white items-left justify-center ">
                            <p className='text-gray-400 text-xl'>
                                {item.title}
                            </p>
                            <h1 className='text-4xl font-bold' style={{color:item.color}}>
                                {item.info}
                            </h1>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default InfoTabs