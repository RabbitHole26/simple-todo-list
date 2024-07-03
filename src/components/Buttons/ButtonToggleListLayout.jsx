import { gridIcon, listIcon } from "../../assets/Svgs"
import { useThemeContext } from "../../context/ThemeContext"
import useConditions from "../../utils/useConditions"
import './Buttons.css'

const ButtonToggleListLayout = ({onClick, className, type = 'button'}) => {
  const {isDarkMode} = useThemeContext()
  const {isLayoutGrid} = useConditions()

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`ButtonToggleListLayout btn-circle btn-sm justify-center items-center transition-all
        ${className} 
        ${isDarkMode ? 'bg-red-500' : 'bg-red-300'}`
      }
    >
      {!isLayoutGrid
        ? gridIcon
        : listIcon
      }
    </button>
  )
}

export default ButtonToggleListLayout
