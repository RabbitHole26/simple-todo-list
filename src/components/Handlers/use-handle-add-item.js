import { useErrorContext } from "../../context/ErrorContext"
import { useItemsContext } from "../../context/ItemsContext"

const useHandleAddItem = ({input, setInput, inputRef}) => {
  const {items, setItems} = useItemsContext()
  const {setError} = useErrorContext()

  const handleAddItem = (event) => {
    event.preventDefault()
    const newItem = {isLineThrough: false, isVisible: true, text: input.trim()}
    const isVisibleDuplicateItem = 
      items
        .filter(item => item.isVisible)
        .some(item => item.text === newItem.text)
    const error = newItem.text.length > 0 && !isVisibleDuplicateItem

    error
    ? (
        // setItems(prev => [newItem, ...prev]),
        // items.some(item => item.isLineThrough) && setItems(sortItems)
        setItems(prev => [newItem, ...prev])
      )
    : setError(true);
  
    setInput('')
    inputRef.current.focus()
  }

  return {handleAddItem}
}

export default useHandleAddItem