import React from 'react'

const defaultValue = {
    currentTheme: 'light',
    changeCurrentTheme: (newTheme: 'light' | 'dark') => {
    },
}

const ThemeContext = React.createContext(defaultValue)

export default ThemeContext