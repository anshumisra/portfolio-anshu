import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFileSqlDuotone } from "react-icons/pi";
import { SiPrisma } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { animate } from "framer-motion";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    intitial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-5xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    intitial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-5xl text-white-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.2)}
                    intitial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <PiFileSqlDuotone className="text-5xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4.7)}
                    intitial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-5xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(7)}
                    intitial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPrisma className="text-5xl text-white-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    intitial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNode className="text-5xl text-green-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    intitial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-5xl text-green-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    intitial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <AiOutlinePython className="text-5xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6.5)}
                    intitial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPostgresql className="text-5xl text-sky-700" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    intitial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiGooglecloud className="text-5xl text-red-400" />
                </motion.div>
            </motion.div>
        </div>
    )
}
export default Technologies;