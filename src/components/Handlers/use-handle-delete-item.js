import { useItemsContext } from "../../context/ItemsContext"
import useConditions from "../../utils/useConditions"

const useHandleDeleteItem = () => {
  const {setItems} = useItemsContext()
  const {listIndex} = useConditions()

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