"use client"
type Props = {
    className?: string;
    placeholder?: string;
}
const TextArea = ({className, placeholder}: Props) => {
    return (
        <textarea className={`flex min-h-[150px] w-full rounded-md bg-darkViolet px-3 text-white/60 border border-white/10 focus-visible:outline-none 
         focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-cyan
        py-2 font-light placeholder:text-white/60 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
                  placeholder={placeholder}/>
    )
}

export default TextArea;