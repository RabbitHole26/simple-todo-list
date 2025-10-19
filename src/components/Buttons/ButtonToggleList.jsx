import { useListContext } from "../../context/ListContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEraser, fa1, fa2 } from "@fortawesome/free-solid-svg-icons"
import './Buttons.css'

const ButtonToggleList = ({ className, onClick, type = 'button', variant }) => {
  const { isAltListActive } = useListContext()

  const toggleList = variant === 'toggle_list'
  // eslint-disable-next-line no-unused-vars
  const clearList = variant === 'clear_list' // defined for clarity on supported variants

  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn-square text-3xl sm:text-4xl rounded-md faCustomScale 
        ${className}`
      }
    >
      <div
        className='flex justify-center items-center'
      >
        {toggleList
          ? (
            <FontAwesomeIcon icon={isAltListActive ? fa1 : fa2} />
          )
          : (
            <FontAwesomeIcon icon={faEraser} />
          )
        }
      </div>
    </button>
  )
}

export default ButtonToggleList
