import {HERO_CONTENT} from "../constants";
import {motion} from "framer-motion";
import profilePic from "../assets/portfolio.jpg";

const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5 ,delay:delay},
    }
})

const Hero=()=>{
    return <div className="border-b border-neutral-900 pb-2 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                     className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text pb-6 text-6xl tracking-tight lg:mt-12 lg:text-6xl text-transparent">Anshu Misra</motion.h1>
                    {/* <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Full Stack Developer
                    </motion.span> */}
                    <motion.p variants={container(1)}
                    initial="hidden"
                    animate="visible" className="my-2 max-w-xl py-3 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 pt-10 lg:p-3 lg:pt-5 flex justify-center">
                <div className="flex justify-center w-65 h-65">
                    <motion.img 
                    initial={{x:100,opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:1,delay:1.2}}
                    src={profilePic} alt="Anshu Misra" className="rounded-lg"/>
                </div>
            </div>
        </div>
    </div>
}

export default Hero;