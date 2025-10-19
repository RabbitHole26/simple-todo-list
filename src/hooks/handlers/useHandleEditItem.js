import { useErrorContext } from '../../context/ErrorContext'
import { useItemsContext } from '../../context/ItemsContext'
import useConditions from '../useConditions'

const useHandleEditItem = () => {
  const { items, setItems } = useItemsContext()
  const { setError } = useErrorContext()
  const { listIndex } = useConditions()

  const handleEditItem = (itemId, updatedTask) => {
    const isDuplicateItem = items[listIndex].some(item => item.task === updatedTask)

    if (isDuplicateItem) {
      setError(`Item already exists.`)
      return
    }

    setItems(prev => {
      const updatedItems = [...prev]

      updatedItems[listIndex] = updatedItems[listIndex].map(
        item => item.id === itemId
          ? { ...item, task: updatedTask }
          : item
      )

      return updatedItems
    })
  }

  return { handleEditItem }
}

export default useHandleEditItem
