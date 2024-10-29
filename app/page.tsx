import Photo from "@/components/Photo";

export default function Home() {
    return (
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row  items-center justify-between">
            <div className="flex flex-col space-y-2 md-44 lg:mt-16 xl:mb-52 lg:w-1/2">
                <h5 className="text-center text-cyanLight lg:text-left">Full stack software
                    developer</h5>
                <h2 className="text-center lg:max-w-md lg:text-left text-grayishViolet font-oxanium">Hello
                    I,m</h2>
                <h1 className="text-center lg:max-w-md lg:text-left text-cyan font-oxanium">Akil
                    Jawad</h1>
                <p className="text-lg text-center text-white lg:max-w-md lg:text-left font-oxanium">
                    I am a passionate software engineer with a profound understanding of web development. Please don't
                    hesitate to reach out if you're interested in collaboration or just want to chat about your next
                    project!
                </p>
                <div className="flex flex-col items-center lg:flex-row lg:items-start">
                    <button
                        className="flex m-2 p-4 border border-cyan rounded rounded-full text-center items-center text-sm
                        text-white font-sans gap-2 group hover:bg-cyan">
                        <span className="group-hover:text-black">Download CV</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 group-hover:text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 16v4h16v-4m-8-1V4m-5 8l5 5 5-5"
                            />
                        </svg>
                    </button>
                    <button
                        className="flex m-2 p-4 border border-cyan rounded rounded-full text-center items-center text-sm
                        text-white font-sans gap-2 group hover:bg-cyan">
                        <span className="group-hover:text-black">Contact Me</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 group-hover:text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 8l7.293 4.293a1 1 0 0 0 1.414 0L19 8m2 0v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m14 0H7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex space-y-2 mb-10 lg:mt-16 xl:mb-52 lg:w-1/2 items-center justify-center">
                <Photo/>
            </div>
        </div>
    );
}
