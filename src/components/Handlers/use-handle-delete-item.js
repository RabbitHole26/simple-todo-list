import { useItemsContext } from "../../context/ItemsContext"

const useHandleDeleteItem = () => {
  const {setItems} = useItemsContext()

  const handleDeleteItem = (itemId) => {
    setItems(prev => prev.filter(item => item.id !== itemId))
  }

  return {handleDeleteItem}
}

export default useHandleDeleteItem