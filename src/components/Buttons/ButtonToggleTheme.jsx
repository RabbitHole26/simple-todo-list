import { useThemeContext } from "../../context/ThemeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

const ButtonToggleTheme = () => {
  const {isDarkMode, setIsDarkMode} = useThemeContext()

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  return (
    <button 
      className='btn btn-square btn-ghost m-1 text-xl mr-3' 
      onClick={toggleTheme}
    >
      {isDarkMode
        ? <FontAwesomeIcon icon={faSun} />
        : <FontAwesomeIcon icon={faMoon} />
      }
  </button>
  )
}

export default ButtonToggleTheme
