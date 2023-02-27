import { useEffect, useState } from "react";
import TextTransition, {presets} from "react-text-transition";

const PROFESSIONS = [
    "C#",
    "Rust",
    "Typescript",
];


const Intro = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
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
                    className="h-screen w-full mx-auto justify-center dark:bg-black bg-gradient-to-r from-orange-400 to-amber-200 dark:from-pink-500 dark:to-yellow-500 background-animate grid gap-4">
                    <div className=" w-full h-full">
                        <h1 className="h-20 w-full text-[60px] font-bold">I Build<br/> <a className=" bg-yellow-300 dark:bg-orange-400">Scalable<br/> APIs & Web-<br/>Applications</a></h1>
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