import { useItemsContext } from "../../context/ItemsContext"
import { useListContext } from "../../context/ListContext"

const useHandleDeleteItem = () => {
  const {setItems} = useItemsContext()
  const {isAltListActive} = useListContext()
  
  const listIndex = isAltListActive ? 1 : 0

  const handleDeleteItem = (itemId) => {
    setItems(prev => {
      const updatedItems = [...prev]
      updatedItems[listIndex] = updatedItems[listIndex ? 1 : 0].filter(item => item.id !== itemId)
      return updatedItems
    })
  }

  return {handleDeleteItem}
}

export default useHandleDeleteItem