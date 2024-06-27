import { useErrorContext } from "../../context/ErrorContext"
import { useItemsContext } from "../../context/ItemsContext"
import { useListContext } from "../../context/ListContext"
import createTask from "./createTask"

const useHandleAddItem = ({input, setInput}) => {
  const {items, setItems} = useItemsContext()
  const {setError} = useErrorContext()
  const {altListActive} = useListContext()

  const handleAddItem = (event) => {
    event.preventDefault()
    const newItem = createTask(input)
    const isDuplicateItem = items[altListActive ? 1 : 0].some(item => item.task === newItem.task)
    const hasError = newItem.task.length === 0 || isDuplicateItem

    hasError
      ? setError(true)
      : setItems(prev => {
        const updatedItems = [...prev]
        updatedItems[altListActive ? 1 : 0] = [newItem, ...updatedItems[altListActive ? 1: 0]]
        return updatedItems
      })

    setInput('')
  }

  return {handleAddItem}
}

export default useHandleAddItem