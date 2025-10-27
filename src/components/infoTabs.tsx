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
        color: '#0048e4'
    },
    {
        title: 'Monthly Revenue',
        info: '$12,101',
        icon: FaCrown,
        color: '#ff0000'
    },
    {
        title: 'Monthly Revenue',
        info: '$12,101',
        icon: FaCrown,
        color: '#00854d'
    },
    {
        title: 'Monthly Revenue',
        info: '$12,101',
        icon: FaCrown,
        color: '#c500a4'
    },

]

const InfoTabs = () => {
    return (
        <div className="flex flex-row gap-6 md:items-center justify-between flex-wrap w-full">
            {data.map((item) => {
                return (
                    <div className="flex flex-row p-2 rounded-xl bg-white items-center justify-center h-[144px] w-full md:w-[368px] ">
                        <div className="flex flex-[2] h-full bg-white items-center justify-center ">
                            <div className={`flex flex-row items-center justify-center rounded-xl h-[100px] w-[100px]`} style={{ backgroundColor: `${item.color}33`, color:item.color}}>
                                <Icon icon={FaCrown} className={`h-[80px] w-[80px] `}></Icon>
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