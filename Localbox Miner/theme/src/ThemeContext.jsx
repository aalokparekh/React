import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()
export function ThemeContextProvider({children}){

    const [theme,setTheme]=useState("light")
    const ToggleTheme = ()=> {
        setTheme(theme=="light" ? "dark" :"light")
    }
    useEffect(()=>{
        document.body.className = theme;
    },[theme])


    return (
        <ThemeContext.Provider value={{theme,ToggleTheme}}>
        {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;