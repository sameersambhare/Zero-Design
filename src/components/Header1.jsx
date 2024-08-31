import React from 'react'

const Header1 = ({content,size}) => {
    const textSize=size||"9.5vw"
    return (
        <div style={{fontSize:`${textSize}`}} className={`w-full font-['Neue_Montreal'] bg-black text-white leading-none py-[8vw] px-[2vw]`}>
            <h1>{content.line1}</h1>
            <h1>{content.line2}</h1>
        </div>
    )
}

export default Header1