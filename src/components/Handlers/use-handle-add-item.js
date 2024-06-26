import { useErrorContext } from "../../context/ErrorContext"
import { useItemsContext } from "../../context/ItemsContext"
import createTask from "./createTask"

const useHandleAddItem = ({input, setInput}) => {
  const {items, setItems} = useItemsContext()
  const {setError} = useErrorContext()

  const handleAddItem = (event) => {
    event.preventDefault()
    const newItem = createTask(input)
    const isDuplicateItem = items.some(item => item.task === newItem.task)
    const error = newItem.task.length > 0 && !isDuplicateItem

    error
      ? setItems(prev => [newItem, ...prev])
      : setError(true)
  
    setInput('')
  }

  return {handleAddItem}
}

export default useHandleAddItem