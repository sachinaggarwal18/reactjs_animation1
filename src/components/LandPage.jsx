import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import {motion} from 'framer-motion';


function LandPage(){
  
    return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"
    className='w-full h-screen bg-zinc-900 pt-1'
    >
      <div className="textstructure mt-52 px-20">
        {["We Create","Eye Opening","Presentations"].map((item,index)=>{
         return  <div className="masker ">
          <div className='w-fit flex'>
            {index ===1 && (<motion.div 
            initial={{width:0}} 
            animate={{width:"9vw"}} 
            transition={{ease:[0.33, 1, 0.68, 1], duration:1.1 }} 
             className='mr-5 w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-lime-500 '></motion.div> )}
            <h1 className="  uppercase text-[9vw] leading-[7.5vw] font-['Founders_Grotesk_X-condensed'] font-bold ">{item}
            </h1>
          </div>  
        </div>
        })}

</div>

<div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
  {[
    "For public and private companies",
    "From the first pitch to IPO"].map((item,index) =>(<p  className='text-md font-light tracking-tight leading-none'>{item}</p>
))}

<div className="start flex items-center gap-5">
  <div className="px-5 py-2 border-[2px] border-zinc-700 rounded-full font-light text-md uppercase ">Start Your Project</div>
  <div className="w-10 h-10 border-[2px] border-zinc-700 rounded-full flex items-center justify-center">
    <span className='rotate-[45deg]'><FaArrowUpLong/></span>
</div>
</div>
</div>

</div>


    
  )
}

export default LandPage
