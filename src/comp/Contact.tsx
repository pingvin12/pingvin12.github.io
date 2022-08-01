import { FC } from "react";
import { social } from "../misc/constants";

const Contact: FC = () => {
    return (
        <div className="pb-20">
            <h1 className="text-center text-4xl mt-14 md:mt-28 mb-10" id="contact">
                Contact
            </h1>
            <div
                data-scroll
                data-scroll-speed="1"
                className="flex justify-center mx-[5vw] mt-8"
            >
                <div className="w-full max-w-[1100px] flex gap-10 flex-col md:flex-row">
                    <div className="flex-1">
                        <form
                            action={process.env.NEXT_PUBLIC_FORM_URL}
                            method="POST"
                            className="flex flex-col gap-2"
                        >
                            <label htmlFor="name">Your name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                minLength={3}
                            />
                            <label htmlFor="email">Your email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                            />
                            <button className="mt-2 py-2 rounded transition duration-300 flex justify-center items-center gap-[10px] bg-[#e9ebf0] hover:bg-[#d7d8db]">
                                Send
                            </button>
                        </form>
                    </div>
                    <div className="flex-1">
                        {social.map((item) => (
                            <a
                                key={item.title}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-3 items-center hover:bg-gray-400 p-2 transition duration-300 "
                            >
                                <img
                                    className="w-[30px] h-[30px] rounded-full dark:invert"
                                    src={item.icon}
                                    alt=""
                                />
                                <h1>{item.title}</h1>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;