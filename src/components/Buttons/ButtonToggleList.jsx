import { useListContext } from "../../context/ListContext"

const ButtonToggleList = ({className, onClick}) => {
  const {isAltListActive} = useListContext()

  return (
    <button type="button" onClick={onClick} className={`btn-square text-3xl sm:text-4xl rounded-md ${className}`}>
      {isAltListActive
        ? <div className="py-[3px]">🍓</div>
        : <div className="py-[3px]">🍌</div>
      }
    </button>
  )
}

export default ButtonToggleList
