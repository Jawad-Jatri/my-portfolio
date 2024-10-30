"use client"

import {ReactNode} from "react";

type Props = {
    className?: string,
    children?: ReactNode;
}
const Button = ({
                    className, children
                }: Props) => {
    return (
        <button
            className={`${className} m-2 p-4 border border-cyan rounded-full text-center 
                        items-center text-sm text-white font-sans gap-2`}>
            {children}
        </button>
    )
}

export default Button;