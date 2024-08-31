import React from 'react'
import { projectsList } from '../constants/index'
const Projects = () => {
    return (
        <div className="w-full font-['Neue_Metana'] min-h-screen p-[2vw] flex flex-wrap  justify-between gap-[1vw] text-white bg-black">
            {projectsList.map((projectItem, index) => {
                return (
                    <div className="w-[48%] h-[55vh]" key={index}>
                        <div className="w-full h-[50vh] pointer-events-none bg-zinc-800 rounded-[2vw] overflow-hidden justify-center items-center flex ">
                            {projectItem.imeg ? <img src={projectItem.imeg} alt="" className='w-full object-cover' /> : <video autoPlay muted loop>
                                <source src={projectItem.vid} type='video/mp4' />
                            </video>}
                        </div>
                        <h1 className="py-[0.5vw] text-[0.95vw]">{projectItem.text}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects