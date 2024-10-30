"use client"
import Image from "next/image";
import Link from "next/link";
import NavLink from "@/components/NavLink";
import NavMenuLink from "@/components/NavMenuLink";
import {useState} from "react";

const links = [
    {url: "/about", title: "About"},
    {url: "/skills", title: "Skills"},
    {url: "/works", title: "Works"},
    {url: "/contact", title: "Contact"},
]

const socialLinks = [
    {
        url: "https://www.facebook.com/akiljawad10/", title: "Facebook", icon: "./icon-facebook.svg",
        tooltip: "Facebook: Akil Jawad", width: 25, height: 25
    },
    {
        url: `mailto:akil.jawad976@gmail.com`,
        title: "Gmail",
        icon: "./icon-gmail.svg",
        tooltip: "Mail: akil.jawad976@gmail.com",
        width: 25,
        height: 25
    },
    {
        url: "https://www.linkedin.com/in/akil-jawad/",
        title: "Linkedin",
        icon: "./icon-linkedin.svg",
        tooltip: "Linkedin: akil-jawad",
        width: 25,
        height: 25
    },
    {
        url: "https://github.com/Jawad-Jatri", title: "Github", icon: "./icon-github.svg",
        tooltip: "Github: Jawad-Jatri", width: 25, height: 25,
    },
    {
        url: "https://wa.me/01785604316", title: "Whatsapp", icon: "./icon-whatsapp.svg",
        tooltip: "Whatsapp: 01785604316", width: 25, height: 25
    },
]
export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [showToolMsg, setShowToolMsg] = useState("");
    const [tooltipPosition, setTooltipPosition] = useState({x: 0, y: 0})

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <nav className="relative container mx-auto px-6">
            {showTooltip && (
                <div
                    style={{
                        position: "fixed",
                        top: tooltipPosition.y + 15,
                        left: tooltipPosition.x + 15,
                        pointerEvents: "none"
                    }}
                    className="px-2 py-1 bg-gray-700 text-white text-sm rounded-lg shadow-lg"
                >
                    {showToolMsg}
                </div>
            )}
            <div className="flex items-center justify-between w-full lg:w-auto xl:mx-20">
                <Link href="/"><Image
                    className="transition-transform hover:scale-110 hover:opacity-90 duration-300 ease-in-out"
                    src="./logo.svg" alt="" width={100} height={100}/></Link>
                <div className="flex items-center space-x-`2`0">
                    <div className="hidden space-x-8 font-bold lg:flex">
                        {links.map((link, index) => (
                            <NavLink link={link} key={index}/>
                        ))}
                    </div>
                </div>
                <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
                    {socialLinks.map((link, index) => (
                        <Link href={link.url} key={index}><Image alt="" className="ficon" src={link.icon}
                                                                 onMouseEnter={(e) => {
                                                                     setShowTooltip(true)
                                                                     setTooltipPosition({
                                                                         x: e.clientX,
                                                                         y: e.clientY
                                                                     })
                                                                     setShowToolMsg(link.tooltip)
                                                                 }}
                                                                 onMouseMove={(e) => setTooltipPosition({
                                                                     x: e.clientX,
                                                                     y: e.clientY
                                                                 })}
                                                                 onMouseLeave={() => setShowTooltip(false)}
                                                                 width={link.width}
                                                                 height={link.height}/></Link>
                    ))}
                </div>
                <div className="md:hidden">
                    <button id="menu-btn" type="button" onClick={toggleMenu}
                            className={`${showMenu ? "open" : ""} z-40 block hamburger xl:hidden focus:outline-none`}>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
            </div>

            <div id="menu"
                 className={`absolute ${showMenu ? "flex" : "hidden"} z-10 p-6 rounded-lg bg-cyan left-6 right-6 top-20 z-100`}>
                <div
                    className="flex flex-col items-center justify-center w-full space-y-3 font-bold text-white rounded-sm">
                    {links.map((link, index) => (
                        <NavMenuLink link={link} key={index}/>
                    ))}
                    <span className="border border-t border-darkViolet w-full"></span>
                    <div className="flex items-center space-x-6">
                        {socialLinks.map((link, index) => (
                            <Link href={link.url} key={index}><Image alt="" className="ficon" src={link.icon}
                                                                     width={link.width}
                                                                     height={link.height}/></Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}