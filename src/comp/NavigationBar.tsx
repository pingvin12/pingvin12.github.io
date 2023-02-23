import {FC} from "react";
import NavigationLink from "./BaseComponents/NavigationLink";
import ThemeToggleSwitch from "./BaseComponents/ThemeToggleSwitch";

const setVisibility = () => {
    let val = document.getElementById('navbar-solid-bg')?.classList.contains('hidden')
    if (Boolean(val)) {
        document.getElementById('navbar-solid-bg')?.classList.remove('hidden')
    } else {
        document.getElementById('navbar-solid-bg')?.classList.add('hidden')
    }
}

const NavigationBar: FC = () => {
    return (
        <nav
            className="transition ease-in-out opacity-50 hover:opacity-100 sticky top-0 z-50 bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-dark">
            <div className="container flex flex-wrap justify-between items-center mx-auto">

                <button data-collapse-toggle="navbar-solid-bg" id={'toggleDropdown'} type="button"
                        onClick={() => setVisibility()}
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
                <div className="hidden w-full md:flex md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <NavigationLink title={"Skills"} href={"#skills"} id={""}/>
                        <NavigationLink title={"Projects"} href={"#projects"} id={""}/>
                        <NavigationLink title={"Tools or Algorithms"} href={"#tools"} id={""}/>
                        <NavigationLink title={"Blog"} href={'/blog'} id={""}/>
                        <ThemeToggleSwitch/>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;