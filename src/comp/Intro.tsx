import React from "react";
import {m} from "framer-motion";
import CanvasIntro from "./BaseComponents/CanvasIntro";

class Intro extends React.Component {
    render() {
        return (
            <div className="relative h-screen flex justify-center items-center flex-col gap-5">
                {/**<CanvasIntro>**/}
                <m.p
                    data-scroll
                    data-scroll-speed="1"
                    id="intro"
                    className="text-3xl text-center z-[1] "
                >
                    {`I'm a software developer`}
                </m.p>
                <CanvasIntro/>
                <svg onClick={(() => scrollBy(0, 1000))} xmlns="http://www.w3.org/2000/svg"
                     className="transition ease-in-out hover:scale-125 w-6 text-black dark:text-white" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
            </div>
        );
    }

}

export default Intro;