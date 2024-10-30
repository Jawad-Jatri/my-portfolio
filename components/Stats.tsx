"use client"

import CountUp from "react-countup";

const stats = [
    {
        value: 6,
        text: "Years of experience"
    },
    {
        value: 30,
        text: "Project completed"
    },
    {
        value: 12,
        text: "Technologies mastered"
    },
    {
        value: 500,
        text: "Code commits"
    }
]
const Stats = () => {
    return (
        <div className="container mx-auto mt-6">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return (
                        <div
                            className="flex-1 flex items-center gap-4 justify-center xl-justify-start transition-transform hover:scale-110 hover:opacity-90 duration-300 ease-in-out"
                            key={index}>
                            <CountUp
                                end={item.value}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold text-cyanLight"/>
                            <p className="font-oxanium text-cyan">{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Stats;