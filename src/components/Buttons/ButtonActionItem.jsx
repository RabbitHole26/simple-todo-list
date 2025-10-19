import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faRotateLeft } from '@fortawesome/free-solid-svg-icons'

const ButtonActionItem = ({onClick, className, isLineThrough}) => {
  return (
    <button className={`flex items-center ${className}`} onClick={onClick} >
      <FontAwesomeIcon 
        className="text-2xl faCustomScale"
        icon={isLineThrough ? faRotateLeft : faCheck} 
      />
    </button>
  )
}

export default ButtonActionItem
