"use client"

import {usePathname} from "next/navigation";
import Link from "next/link";

const NavLink = ({link}: { link: { url: string; title: string } }) => {
    const pathName = usePathname()

    return (
        <Link
            className={`p-2 text-grayishViolet hover:text-black ${pathName === link.url && "rounded-xl bg-black text-white hover:text-white"}`}
            href={link.url}>{link.title}</Link>
    )
}

export default NavLink;