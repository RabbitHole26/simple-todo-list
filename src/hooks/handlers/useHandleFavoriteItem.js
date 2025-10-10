import { useItemsContext } from "../../context/ItemsContext"
import useConditions from "../useConditions"

const useHandleFavoriteItem = () => {
  const {setItems} = useItemsContext()
  const {listIndex} = useConditions()

  const handleFavoriteItem = (itemId) => {
    setItems(prev => {
      const updatedItems = [... prev]

      updatedItems[listIndex] = updatedItems[listIndex].map(item => item.id === itemId
        ? { ... item, isFavorite: !item.isFavorite}
        : item
      )

      return updatedItems
    })
  }

  return {handleFavoriteItem}
}

export default useHandleFavoriteItem
