import React, { useState } from 'react'
import {motion,useAnimation} from 'framer-motion';
import { Power4 } from "gsap/all";

function Featured() {

    const cards=[useAnimation(),useAnimation()];

    const handleHover = (index) =>{
            cards[index].start({ y:"0"})
    }

    const handleHoverEnd = (index) =>{
        cards[index].start({ y:"100%"})
}



  return (
    <div className="w-full py-20 bg-zinc-900">
        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
            <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight '
            >Featured Projects</h1>
        </div>
        
        <div className='px-20'>
            <div className="cards w-full flex gap-10 mt-10">


                <motion.div onHoverStart={()=>handleHover(0)}  onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[75vh]">
                <h1 className="card absolute flex overflow-hidden left-full text-[#CDEA68] -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-8xl leading-none tracking-tighter">
                    {"FYDE".split('').map((item,index) => <motion.span
                    initial={{y:"100%"}}
                    animate={cards[0]}
                    transition={{ease:[.22,1,.36,1], delay:index*.01}}
                    className='iniline-block'
                    >{item}</motion.span> )}
                </h1>
                    <div className="card w-full h-full rounded-xl overflow-hidden ">
                        <img className='w-full h-full bg-cover' src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8zMV9jbG9zZV91cF9pbGx1c3RhdGlvbl9vZl9hX3Ntb2tpbmdfdGVlbmFnZXJfcF9iZWVjMDY0MS00ODk3LTQ4ZjktOGYzYS01YTQwODA4ZjQ5OTZfMS5qcGc.jpg" alt="" />
                    </div>
                </motion.div>


                <motion.div onHoverStart={()=>handleHover(1)}  onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer w-1/2 relative h-[75vh] ">
                <h1 className="card absolute flex overflow-hidden right-full text-[#CDEA68] flex overflow-hidden translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-8xl leading-none tracking-tighter">
                {"COOl".split('').map((item,index) => <motion.span
                    initial={{y:"100%"}}
                    animate={cards[1]}
                    transition={{ease:[.22,1,.36,1], delay:index*.01}}
                    className='iniline-block'
                    >{item}</motion.span> )}
                </h1>
                    <div className="card w-full h-full rounded-xl overflow-hidden">
                    <img className='w-full h-full bg-cover' src="https://w0.peakpx.com/wallpaper/440/3/HD-wallpaper-monkey-fdg-gfd.jpg" alt="" />

                    </div>
                </motion.div>


            </div>
        </div>
        
    </div>
  )
}

export default Featured
