"use client"
import {motion} from "framer-motion";
import {FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import {FiSend} from "react-icons/fi";

const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "(+88) 01785-604316",
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "akil.jawad976@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt/>,
        title: "Address",
        description: "Khilgaon, Dhaka-1219",
    }
]
export default function Contact() {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 1.4, duration: 0.4, ease: "easeIn"},
            }}
            className="py-6"
        >
            <div className="container mx-auto p-6">
                <div className="flex flex-col xl:flex-row gap-[30px] xl:mx-20">
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form action="" className="flex flex-col gap-6 p-10 bg-violet rounded-md m-2">
                            <h3 className="text-4xl text-cyanLight font-oxanium">Let&#39;s Talk</h3>
                            <p className="text-white font-oxanium">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Debitis
                                dolor
                                eaque eum ipsam nihil provident quaerat reiciendis reprehenderit sint ut!</p>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <Input type="firstname" placeholder="Firstname"/>
                                <Input type="lastname" placeholder="Lastname"/>
                                <Input type="email" placeholder="Email Address"/>
                                <Input type="phone" placeholder="Phone Number"/>
                            </div>
                            <TextArea placeholder="Type your message here..."/>
                            <div className="flex items-center lg:flex-row lg:items-start">
                                <Button className="flex group hover:bg-cyan max-w-60">
                                    <span className="group-hover:text-black">Send Message</span>
                                    <FiSend className="text-xl group-hover:text-black"/>
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 m-2">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div
                                        className="w-[52px] h-[52px] xl:w-12 xl:h-12 bg-cyanDark text-cyanLight rounded-md flex items-center justify-center">
                                        <div>{item.icon}</div>
                                    </div>
                                    <div className="text-[14px] text-white/60">
                                        <p>{item.title}</p>
                                        <h4>{item.description}</h4>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
