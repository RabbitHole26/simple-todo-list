import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons"
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"

const ButtonFavoriteItem = ({onClick, isFavorite}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-2xl"
    >
      <FontAwesomeIcon 
        className="faCheckmarkCustom faCustomHover" 
        icon={isFavorite ? faStarSolid : faStarRegular} 
      />
    </button>
  )
}

export default ButtonFavoriteItem
