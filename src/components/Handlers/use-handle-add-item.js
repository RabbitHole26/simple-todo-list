import sortItems from "../../utils/sort-items"

const useHandleAddItem = ({itemsArray, setItemsArray, input, setInput, setError, inputRef}) => {
  const handleAddItem = (event) => {
    event.preventDefault()
    const newItem = {isLineThrough: false, isVisible: true, text: input.trim()}
    const isVisibleDuplicateItem = 
      itemsArray
        .filter(item => item.isVisible)
        .some(item => item.text === newItem.text)
    const error = newItem.text.length > 0 && !isVisibleDuplicateItem

    error
    ? (
        setItemsArray(prev => [newItem, ...prev]),
        itemsArray.some(item => item.isLineThrough) && setItemsArray(sortItems)
      )
    : setError(true);
  
    setInput('')
    inputRef.current.focus()
  }

  return {handleAddItem}
}

export default useHandleAddItem