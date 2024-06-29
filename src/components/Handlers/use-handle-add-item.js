import { useErrorContext } from "../../context/ErrorContext"
import { useItemsContext } from "../../context/ItemsContext"
import { useListContext } from "../../context/ListContext"
import createTask from "./createTask"

const useHandleAddItem = ({input, setInput}) => {
  const {items, setItems} = useItemsContext()
  const {setError} = useErrorContext()
  const {isAltListActive} = useListContext()
  
  const listIndex = isAltListActive ? 1 : 0

  const handleAddItem = (event) => {
    event.preventDefault()
    const newItem = createTask(input)
    const isDuplicateItem = items[listIndex].some(item => item.task === newItem.task)
    const hasError = newItem.task.length === 0 || isDuplicateItem

    hasError
      ? setError(true)
      : setItems(prev => {
        const updatedItems = [...prev]
        updatedItems[listIndex] = [newItem, ...updatedItems[listIndex]]
        return updatedItems
      })

    setInput('')
  }

  return {handleAddItem}
}

export default useHandleAddItem