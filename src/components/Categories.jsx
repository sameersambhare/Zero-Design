import React from 'react'
import {categoriesList} from '../constants/index'
const Categories = () => {
    return (
        <div className='w-full text-white bg-black flex items-center justify-evenly px-[1vw]'>
            {categoriesList.map((categoryItem, index) => {
                return (
                    <div key={index} className="w-[18%] pointer-events-none h-[35vw] flex items-center justify-center flex-col gap-[1vw]">
                        <div className="w-full h-[30vw] rounded-[3vw] border-none overflow-hidden bg-white flex items-center justify-center">
                            {categoryItem.imeg ? <img src={categoryItem.imeg} alt="" className='w-full object-cover' /> : <video autoPlay muted loop className="w-full" style={{scale:`${categoryItem.scale}`}}>
                                <source src={categoryItem.vid} type='video/mp4' />
                            </video>}

                        </div>
                        <h1 className='text-[1.2vw]'>{categoryItem.text}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Categories