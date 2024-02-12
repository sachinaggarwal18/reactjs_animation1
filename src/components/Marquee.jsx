import React from 'react'
import {motion} from 'framer-motion';


const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1"  className='w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-[#004D43]' >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">

        <motion.h1 
        initial={{x:"0"}} 
        animate={{x:"-100%"}} 
        transition={{repeat:Infinity, ease:"linear", duration:5 }} 
        className='text-[24vw] leading-none font-["Founders_Grotesk_X-condensed"] uppercase -mb-[7vw] font-semibold pt-10'>
           We Are Ochi
        </motion.h1>

        

        {/* <motion.h1
        initial={{x:"0"}} 
        animate={{x:"-100%"}} 
        transition={{repeat:Infinity, ease:"linear", duration:5 }} 
        className='text-[24vw] leading-none font-["Founders_Grotesk_X-condensed"] uppercase -mb-[7vw] font-semibold pt-10'>We Are Ochi</motion.h1> */}
      </div>
    </div>
  )
}

export default Marquee
