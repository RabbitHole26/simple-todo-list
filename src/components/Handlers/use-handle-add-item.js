import { useItemsContext } from "../../context/ItemsContext"
import sortItems from "../../utils/sort-items"

const useHandleAddItem = ({input, setInput, setError, inputRef}) => {
  const {items, setItems} = useItemsContext()

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
        setItems(prev => [newItem, ...prev]),
        items.some(item => item.isLineThrough) && setItems(sortItems)
      )
    : setError(true);
  
    setInput('')
    inputRef.current.focus()
  }

  return {handleAddItem}
}

export default useHandleAddItem