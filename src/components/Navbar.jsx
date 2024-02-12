import React from 'react'

function Navbar() {
  return (
    <div className=" fixed z-[999] w-full px-20 py-8 text-white font-['
    Neue_Montreal'] flex justify-between items-center  ">
        <div className="logo">
        SACHIN.
        </div>

        <div className="links flex gap-10">
            {["Services","Our Work","About Us","Insights","contact"].map((item,index)=>(
                <a key={index} className={`text-lg font-regular capitalize ${index === 4 && "ml-32"}`}>{item}</a>
            ))}
        </div>

    </div>
  )
}

export default Navbar
