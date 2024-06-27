import { useItemsContext } from "../../context/ItemsContext"
import { useListContext } from "../../context/ListContext"

const useHandleDeleteItem = () => {
  const {setItems} = useItemsContext()
  const {altListActive} = useListContext()

  const handleDeleteItem = (itemId) => {
    // setItems(prev => prev[altListActive ? 1 : 0].filter(item => item.id !== itemId))
    setItems(prev => {
      const updatedItems = [...prev]
      updatedItems[altListActive ? 1 : 0] = updatedItems[altListActive ? 1 : 0].filter(item => item.id !== itemId)
      return updatedItems
    })
  }

  return {handleDeleteItem}
}

export default useHandleDeleteItem