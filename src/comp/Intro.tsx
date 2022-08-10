import React from "react";
import TextTransition, {presets} from "react-text-transition";

const PROFESSIONS = [
    "Programming",
    "Fullstack",
    "Coding",
];


const Intro = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <>
            <div className="relative h-screen flex justify-center items-center flex-col gap-5 ">
                <div
                    className="flex justify-start h-screen w-full mx-auto justify-center bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 grid grid-rows-2 gap-4">
                    <div className="row-span-1">
                        <h1 className="p-20 h-20 w-full text-5xl font-bold">Hey, I'm József Fényes</h1>
                    </div>
                    <div className="row-span-2">
                        <h1 className='p-20 h-20 w-full text-5xl font-bold'>I mainly do</h1>
                        <TextTransition className='mx-20 w-full text-5xl font-bold dark:text-white text-black' springConfig={presets.gentle}>
                            {PROFESSIONS[index % PROFESSIONS.length]}
                        </TextTransition>
                    </div>
                </div>
                <svg onClick={(() => scrollBy(0, 1000))} xmlns="http://www.w3.org/2000/svg"
                     className="animate-bounce w-6 text-black dark:text-white" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
            </div>
        </>
    );


}

export default Intro;