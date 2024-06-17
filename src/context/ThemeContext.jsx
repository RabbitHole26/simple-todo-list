import { createContext, useState, useContext } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

const useThemeContext = () => useContext(ThemeContext)

// eslint-disable-next-line react-refresh/only-export-components
export {ThemeProvider, useThemeContext}