"use client"
import {motion} from "framer-motion"
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-96 h-96 xl:w-[500px] xl:h-[500px] relative flex justify-center items-center">
            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 1.4,
                        duration: 0.4,
                        ease: "easeInOut"
                    }
                }}>
                {/* Image with rounded corners */}
                <Image src="/assets/photo.jpg" alt="my-photo" priority quality={100} fill
                       className="rounded-full object-cover border-4 border-transparent"/>
            </motion.div>
            {/* Animated SVG Border */}
            <motion.svg
                className="absolute w-96 h-96 xl:w-[500px] xl:h-[500px]"
                fill="transparent"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle
                    cx="50"
                    cy="50"
                    r="49"
                    stroke="cyan"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    initial={{strokeDasharray: "24 10 8 7"}}
                    animate={{
                        strokeDasharray: ["15 12 5 15", "16 25 32 42", "4 25 22 22"],
                        rotate: [120, 360]
                    }}
                    transition={{duration: 20, repeat: Infinity, repeatType: "reverse"}}
                />
            </motion.svg>
        </div>


    )
}

export default Photo