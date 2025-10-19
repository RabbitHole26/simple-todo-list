import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons"
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"

const ButtonFavoriteItem = ({onClick, isFavorite}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center"
    >
      <FontAwesomeIcon 
        className="text-2xl faCustomScale" 
        icon={isFavorite ? faStarSolid : faStarRegular} 
      />
    </button>
  )
}

export default ButtonFavoriteItem
