
import {useEffect} from "react";
class dark{
    auto()
    {
        useEffect(() =>
        {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }, [])
    }

    dark_mode()
    {
        useEffect(() => {
            localStorage.theme = 'dark'
        }, [])
    }
    light_mode(){
        useEffect(() => {
            localStorage.theme = 'light'
        }, [])
    }
}

export default dark;

