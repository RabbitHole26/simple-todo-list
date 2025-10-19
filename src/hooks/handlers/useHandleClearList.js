import { useItemsContext } from "../../context/ItemsContext"
import useConditions from "../useConditions"

const useHandleClearList = () => {
  const { setItems } = useItemsContext()
  const { listIndex } = useConditions()

  const handleClearList = () => {
    setItems(prev => {
      const updatedItems = [...prev]

      updatedItems[listIndex] = []

      return updatedItems
    })
  }

  return { handleClearList }
}

export default useHandleClearList
