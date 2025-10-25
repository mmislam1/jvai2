import React from 'react'

interface data {
    title: string | '',
    info: string | '',
    color: string | ''
}

const data: data[] = [
    {
        title: 'Monthly Revenue',
        info: '$12,101',
        color: 'rgba(19,76,156,1)'
    }
]

const InfoTabs = () => {
    return (
        <div className="flex flex-row flex-1 h-[144px] gap-6 justify-between flex-wrap">
            {data.map((item) => {
                return (
                    <div className="flex flex-row p-2 rounded-xl bg-white items-center justify-center h-[144px] w-[368px]">
                        <div className="flex flex-[2] h-full bg-white items-center justify-center ">
                            <div className={`flex flex-row items-center justify-center rounded-xl h-[100px] w-[100px]`} style={{ backgroundColor: item.color, opacity:.2}}>

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

            <div className="flex flex-row p-2 rounded-xl bg-white items-center justify-center h-[144px] w-[368px]">

            </div>
            <div className="flex flex-row p-2 rounded-xl bg-white items-center justify-center h-[144px] w-[368px]">

            </div>
            <div className="flex flex-row p-2 rounded-xl bg-white items-center justify-center h-[144px] w-[368px]">

            </div>

        </div>
    )
}

export default InfoTabs