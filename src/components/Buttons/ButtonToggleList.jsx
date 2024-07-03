import { useListContext } from "../../context/ListContext"
import './Buttons.css'

const ButtonToggleList = ({className, onClick, type = 'button'}) => {
  const {isAltListActive} = useListContext()

  return (
    <button 
      onClick={onClick}
      type={type}
      className={`btn-square text-3xl sm:text-4xl rounded-md 
        ${className}`
      }
    >
      {isAltListActive
        ? <div className="ButtonToggleList py-[3px]">🍓</div>
        : <div className="ButtonToggleList py-[3px]">🍌</div>
      }
    </button>
  )
}

export default ButtonToggleList
