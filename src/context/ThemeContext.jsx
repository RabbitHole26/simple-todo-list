import { createContext, useState, useContext, useEffect } from "react";
import useSetInitialState from "../utils/useSetInitialState";

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(useSetInitialState('isDarkMode', false))

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
  }, [isDarkMode])

  return (
    <ThemeContext.Provider value={{
      isDarkMode, 
      setIsDarkMode
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useThemeContext = () => useContext(ThemeContext)

// eslint-disable-next-line react-refresh/only-export-components
export {ThemeProvider, useThemeContext}