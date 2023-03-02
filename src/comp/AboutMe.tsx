import {FC} from "react";
import {about} from "../misc/constants";

const AboutMe: FC = () => {
    return (
        <>
            <h1 className="text-center text-4xl mb-10 md:mb-20" id="aboutme">About</h1>
            {about.map((item, index) => (
                <div
                    key={item.name}
                    className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 ${
                        index % 2 === 1
                            ? "flex-col lg:flex-row"
                            : "flex-col lg:flex-row-reverse"
                    }`}
                >
                    <div data-scroll-speed="3" className="md:flex-1">
                        <div className="overflow-hidden scale-100">
                            <img
                                className="transition ease-in-out delay-150 max-w-[500px] rounded-[100px] scale-100 duration-300 drop-shadow-2xl"
                                src={item.profpic}
                                alt=""
                                width={item.width}
                                height={item.height}
                            />

                        </div>
                    </div>
                    <div className="item-info lg:flex-1">
                        <h1 className="text-3xl">{item.name}</h1>
                        <p className="text-[20px] text-justify my-3">
                            {item.desc}
                        </p>


                    </div>
                </div>
            ))}
        </>
    );
}

export default AboutMe;