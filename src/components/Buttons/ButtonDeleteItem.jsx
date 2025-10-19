import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ButtonDeleteItem = ({onClick, className}) => {
  return (
    <button 
      className={`flex items-center ${className}`} 
      onClick={onClick}
    >
      <FontAwesomeIcon 
        className="text-2xl faCustomScale"
        icon={faTrash}
      />
    </button>
  )
}

export default ButtonDeleteItem
