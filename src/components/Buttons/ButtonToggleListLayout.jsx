import { gridIcon, listIcon } from "../../assets/Svgs"
import { useThemeContext } from "../../context/ThemeContext"
import useConditions from "../../utils/useConditions"

const ButtonToggleListLayout = ({onClick, className, type = 'button'}) => {
  const {isDarkMode} = useThemeContext()
  const {isLayoutGrid} = useConditions()

  return (
    <button type={type} onClick={onClick} className={`btn-circle btn-sm justify-center items-center ${className} ${isDarkMode ? 'bg-red-500' : 'bg-red-300'}`}>
      {!isLayoutGrid
        ? gridIcon
        : listIcon
      }
    </button>
  )
}

export default ButtonToggleListLayout
