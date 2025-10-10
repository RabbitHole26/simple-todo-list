import { createContext, useState, useContext } from "react";
import setInitialState from "../utils/set-initial-state";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(setInitialState('isDarkMode', false))

  useLocalStorage('isDarkMode', isDarkMode)

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