import React from "react";


const themeSwitch = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

const ThemeToggleSwitch: React.FC = () => {

    return (<label htmlFor="default-toggle" className="inline-flex relative items-end cursor-pointer">
            <input type="checkbox" value="" id="default-toggle" className="sr-only peer"
                   onClick={() => themeSwitch()}/>
            <div
                className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-50 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-400"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"> Theme</span>
        </label>
    );
}
export default ThemeToggleSwitch;