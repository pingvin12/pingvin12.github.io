import {FC, ReactNode, useEffect, useState} from 'react'
import ThemeContext from './ThemeContext'

const ThemeContextWrapper: FC<{ children: ReactNode }> = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    const changeCurrentTheme = (newTheme: 'light' | 'dark') => {
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        if (theme === 'light') document.body.classList.remove('dark')
        else document.body.classList.add('dark')
    }, [theme])

    return <ThemeContext.Provider value={{currentTheme: theme, changeCurrentTheme}}>{children}</ThemeContext.Provider>
}

export default ThemeContextWrapper