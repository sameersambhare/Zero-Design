import React from 'react'
import categoriesList from '../constants/index'
const Categories = () => {
    return (
        <div className='w-full text-white bg-black flex items-center justify-evenly px-[1vw]'>
            {categoriesList.map((categoryItem, index) => {
                return (
                    <div key={index} className="w-[18%] h-[35vw] flex items-center justify-center flex-col gap-[1vw]">
                        <div className="w-full h-[30vw] rounded-[2vw] border-none overflow-hidden bg-white flex items-center justify-center">
                            <video autoPlay muted loop className='w-full scale-[1.75]'>
                                <source src={categoryItem.vid} type='video/mp4' />
                            </video>
                        </div>
                        <h1 className='text-[1.2vw]'>{categoryItem.text}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Categories