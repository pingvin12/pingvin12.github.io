import { FC } from "react";
import { m } from "framer-motion";

const Intro: FC = () => {
    return (
        <div className="relative h-screen flex justify-center items-center flex-col gap-5">
            <m.p
                data-scroll
                data-scroll-speed="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                className="text-3xl text-center z-[1] overflow-hidden"
            >
                {`I'm a frontend developer`}
            </m.p>

            <m.a
                data-scroll
                data-scroll-speed="2"
                data-scroll-delay="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
                href="#who"
                data-scroll-to
            >
            </m.a>
        </div>
    );
};

export default Intro;