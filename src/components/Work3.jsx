import React from 'react'

const Work3 = ({image}) => {
    return (
        <div>
            <div className='w-full min-h-screen pt-[1vw] pb-[2vw] bg-black px-[2vw] '>
                <div className="rounded-[2vw] w-full h-screen overflow-hidden items-center justify-center flex">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Work3