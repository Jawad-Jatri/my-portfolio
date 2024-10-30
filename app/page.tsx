"use client"
import {motion} from "framer-motion";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import {FiDownload, FiPhone} from "react-icons/fi"
import Button from "@/components/Button";

export default function Home() {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 1.4, duration: 0.4, ease: "easeIn"},
            }}
            className="py-6"
        >
            <div className="container flex flex-col mx-auto p-6">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between xl:mx-20">
                    <div className="flex flex-col space-y-2 md-44 lg:mt-16 xl:mb-32 lg:w-1/2">
                        <h5 className="text-center text-cyanLight lg:text-left">Full stack software
                            developer</h5>
                        <h2 className="text-center lg:max-w-md lg:text-left text-grayishViolet font-oxanium">Hello
                            I,m</h2>
                        <h1 className="text-center lg:max-w-md lg:text-left text-cyan font-oxanium">Akil
                            Jawad</h1>
                        <p className="text-lg text-center text-white lg:max-w-md lg:text-left font-oxanium">
                            I am a passionate software engineer with a profound understanding of web development. Please
                            don't
                            hesitate to reach out if you're interested in collaboration or just want to chat about your
                            next
                            project!
                        </p>
                        <div className="flex flex-col items-center lg:flex-row lg:items-start">
                            <Button
                                className="flex group hover:bg-cyan">
                                <span className="group-hover:text-black">Download CV</span>
                                <FiDownload className="text-xl group-hover:text-black"/>
                            </Button>
                            <Button className="flex group hover:bg-cyan">
                                <span className="group-hover:text-black">Contact Me</span>
                                <FiPhone className="text-xl group-hover:text-black"/>
                            </Button>
                        </div>
                    </div>
                    <div className="flex space-y-2 mb-10 lg:mt-16 xl:mb-32 lg:w-1/2 items-center justify-center">
                        <Photo/>
                    </div>
                </div>
                <div>
                    <Stats/>
                </div>
            </div>
        </motion.section>
    );
}
