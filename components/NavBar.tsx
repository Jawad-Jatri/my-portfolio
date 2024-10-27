import Image from "next/image";
import Link from "next/link";
import NavLink from "@/components/NavLink";

const links = [
    {url: "/", title: "Home"},
    {url: "/about", title: "About"},
    {url: "/skills", title: "Skills"},
    {url: "/works", title: "Works"},
    {url: "/contact", title: "Contact"},
]

const socialLinks = [
    {url: "/", title: "Facebook", icon: "./icon-facebook.svg", width: 25, height: 25},
    {url: "/", title: "Gmail", icon: "./icon-gmail.svg", width: 25, height: 25},
    {url: "/", title: "Linkedin", icon: "./icon-linkedin.svg", width: 25, height: 25},
    {url: "/", title: "Github", icon: "./icon-github.svg", width: 25, height: 25},
    {url: "/", title: "Whatsapp", icon: "./icon-whatsapp.svg", width: 25, height: 25},
]
export default function NavBar() {
    return (
        <nav className="relative container mx-auto px-6">
            <div className="flex items-center justify-between w-full lg:w-auto">
                <Link href="/"><Image src="./logo.svg" alt="" width={100} height={100}/></Link>
                <div className="flex items-center space-x-`2`0">
                    <div className="hidden space-x-12 font-bold lg:flex">
                        {links.map((link, index) => (
                            <NavLink link={link} key={index}/>
                        ))}
                    </div>
                </div>
                <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
                    {socialLinks.map((link, index) => (
                        <Link href={link.url} key={index}><Image alt="" className="ficon" src={link.icon}
                                                                 width={link.width}
                                                                 height={link.height}/></Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}