import { gridIcon, listIcon } from "../../assets/Svgs"
import { useThemeContext } from "../../context/ThemeContext"
import useConditions from "../../utils/useConditions"

const ButtonToggleListLayout = ({onClick, className}) => {
  const {isDarkMode} = useThemeContext()
  const {isLayoutGrid} = useConditions()

  return (
    <button onClick={onClick} className={`btn-circle btn-sm z-30 m-1 justify-center items-center ${className} ${isDarkMode ? 'bg-red-500' : 'bg-red-300'}`}>
      {isLayoutGrid
        ? gridIcon
        : listIcon
      }
    </button>
  )
}

export default ButtonToggleListLayout
