import React from 'react'
const Work2 = ({image}) => {
    return (
        <div>
            <div className='w-full min-h-screen pt-[2vw] pb-[1vw] bg-black px-[2vw] '>
                <div className="rounded-[2vw] w-full h-screen overflow-hidden items-center justify-center flex">
                   <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Work2