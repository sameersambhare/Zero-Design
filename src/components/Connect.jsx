import React from 'react'
import { connectList } from '../constants/index'
const Connect = () => {
    return (
        <div className='w-full bg-black min-h-screen justify-evenly gap-[1.5vw] px-[2vw] flex flex-wrap pb-[8vw]'>
            {connectList.map((connectionItem, index) => {
                return (
                    <div className="w-[48%] h-[23vw] flex items-center hover:bg-white hover:text-black duration-[0.5s] leading-none justify-center border-[0.1vw] rounded-[3vw] flex-col">
                        <h1 className="font-['Neue_Metana'] capitalize tracking-tighter font-light text-[1.2vw]">{connectionItem.title}</h1>
                        <h1 className='underline text-[2.1vw]'>{connectionItem.id}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Connect