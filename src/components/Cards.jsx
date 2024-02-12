import React from 'react'

function Cards() {
  return (
    <div>
      <div className="w-full h-screen flex items-center px-32 gap-5 bg-zinc-900">
        <div className="cardcontainer w-1/2 h-[50vh]">
            <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className="px-5 py-1 rounded-full border-2 absolute left-10 bottom-10 text-[#CDEA68]">&copy;2024</button>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
            <div className="card relative w-1/2 flex items-center justify-center rounded-xl h-full bg-[#192826]">
                <img className='w-32 object-cover'  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className="px-5 py-1 rounded-full border-2 absolute left-10 bottom-10 text-[#CDEA68]">&copy;2024</button>
            </div>
            <div className="card relative w-1/2 flex items-center justify-center h-full rounded-xl bg-[#192826]">
                <img className='object-cover w-20' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className="px-5 py-1 rounded-full border-2 absolute left-10 bottom-10 text-[#CDEA68]">&copy;2024</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
