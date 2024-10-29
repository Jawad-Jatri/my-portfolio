"use client"
import {motion} from "framer-motion"
import Image from "next/image";

const Photo = () => {
    return (
        <div
            className="w-96 h-96 relative rounded rounded-full overflow-hidden border-2 border-cyanLight border-dashed">
            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 1,
                        duration: 0.4,
                        ease: "easeIn"
                    }
                }}>
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
                    <div className="w-full h-full xl:w-[498px] xl:h-[498px]">
                        <Image src="/assets/my-photo.jpg" alt="my-photo" priority quality={100} fill
                               className="object-cover"/>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Photo