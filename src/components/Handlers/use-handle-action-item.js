import { useItemsContext } from "../../context/ItemsContext"

const useHandleActionItem = () => {
  const {setItems} = useItemsContext()

  const handleActionItem = (itemId) => {
    setItems(prev => {
      // updated items with toggled isLineThrough property
      const updatedItems = prev.map(item => itemId === item.id
          ? {...item, isLineThrough: !item.isLineThrough}
          : item
      )
  
      // separate checked and unchecked items
      const checkedItems = updatedItems.filter(item => item.isLineThrough)
      const uncheckedItems = updatedItems.filter(item => !item.isLineThrough)

      // find index of the item that was just actioned
      const actionedItemIndex = updatedItems.findIndex(item => item.id === itemId)

      // return actioned item
      const actionedItem = updatedItems[actionedItemIndex]

      // return all of the unchecked items excluding the actioned item
      const uncheckedItemsWithoutActionItem = uncheckedItems.filter(item => item !== actionedItem)

      // move the unchecked actioned item to the top of the unchecked items list
      const newUncheckedItems = [actionedItem, ...uncheckedItemsWithoutActionItem]

      // if the actioned item was just unchecked (isLineThrough changed from true to false)
      return !updatedItems[actionedItemIndex].isLineThrough
        // return combined list with updated order  
        ? [...newUncheckedItems, ...checkedItems]
        // return combined list with original order
        : [...uncheckedItems, ...checkedItems]
    })
  }

  return {handleActionItem}
}

export default useHandleActionItem