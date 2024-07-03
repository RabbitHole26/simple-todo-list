import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faRotateLeft } from '@fortawesome/free-solid-svg-icons'

const ButtonActionItem = ({onClick, className, item}) => {
  return (
    <button className={`flex w-[24px] ${className}`} onClick={onClick} >
      {item.isLineThrough
        ? <FontAwesomeIcon className="text-2xl active:scale-[0.8] faCheckmarkCustom faCustomHover" icon={faRotateLeft} />
        : <FontAwesomeIcon className="text-2xl active:scale-[0.8] faCheckmarkCustom faCustomHover" icon={faCheck} />
      }
    </button>
  )
}

export default ButtonActionItem
