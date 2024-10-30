"use client"

type Props = {
    type: string;
    placeholder?: string;
    className?: string;
}
const Input = ({
                   type, placeholder, className
               }: Props) => {
    return (
        <input type={type} placeholder={placeholder} className={`flex h-[48px] rounded-md border border-white/10 focus:border-cyan text-white/60
         font-light bg-darkViolet px-4 py-5 text-base placeholder:text-white/60 outline-none ${className}`}/>
    )
}

export default Input