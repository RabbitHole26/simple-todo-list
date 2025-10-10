import { useErrorContext } from "../../context/ErrorContext"
import { useItemsContext } from "../../context/ItemsContext"
import createTask from "../../utils/create-task"
import useConditions from "../useConditions"

const useHandleAddItem = ({input, setInput}) => {
  const {items, setItems} = useItemsContext()
  const {setError} = useErrorContext()
  const {listIndex} = useConditions()

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