"use client"

import {usePathname} from "next/navigation";
import Link from "next/link";

const NavMenuLink = ({link}: { link: { url: string; title: string } }) => {
    const pathName = usePathname()

    return (
        <Link
            className={`p-2 w-full text-center hover:text-black ${pathName === link.url && "rounded-lg bg-darkViolet text-white hover:text-white"}`}
            href={link.url}>{link.title}</Link>
    )
}

export default NavMenuLink;