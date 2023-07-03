import {FC} from "react";
import {FaGithub} from "react-icons/fa";
import {projects} from "../misc/constants";


const Projects: FC = () => {
    return (
        <>
            <h1 className="text-center text-4xl mb-10 md:mb-20" id="projects">Projects</h1>
            {projects.map((item, index) => (
                <div
                    key={item.title}
                    className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 ${
                        index % 2 === 1
                            ? "flex-col lg:flex-row"
                            : "flex-col lg:flex-row-reverse"
                    }`}
                >
                    <div data-scroll-speed="3" className="lg:flex-1">
                        <div className="border-transparent border-2 rounded-[20px] overflow-hidden drop-shadow-2xl">
                            <img
                                className="w-full"
                                src={item.banner}
                                alt=""
                                width={item.width}
                                height={item.height}
                            />
                        </div>
                    </div>
                    <div className="item-info lg:flex-1">
                        <h1 className="text-3xl">{item.title}</h1>
                        <p className="text-[20px] text-justify my-3">
                            {item.desc}
                        </p>


                        <div className="flex mt-[25px] gap-[20px]">

                            <a
                                href={item.git}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1b222b] hover:bg-[#191e25] dark:bg-white dark:text-black"
                            >
                                <FaGithub size={25}/>
                                <span> View on Github</span>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Projects;