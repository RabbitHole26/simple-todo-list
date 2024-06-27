import { useItemsContext } from "../../context/ItemsContext"
import { useListContext } from "../../context/ListContext"

const useHandleActionItem = () => {
  const { setItems } = useItemsContext()
  const { altListActive } = useListContext()

  const handleActionItem = (itemId) => {
    setItems(prev => {
      // create a copy of the current items array
      const updatedItems = [...prev]
      
      // update the relevant sub-array
      updatedItems[altListActive ? 1 : 0] = updatedItems[altListActive ? 1 : 0].map(item => 
        item.id === itemId
          ? { ...item, isLineThrough: !item.isLineThrough }
          : item
      )

      // separate the updated items into checked and unchecked
      const list = updatedItems[altListActive ? 1 : 0]
      const checkedItems = list.filter(item => item.isLineThrough)
      const uncheckedItems = list.filter(item => !item.isLineThrough)

      // find the actioned item and its index
      const actionedItemIndex = list.findIndex(item => item.id === itemId)
      const actionedItem = list[actionedItemIndex]

      // reorder the items based on the toggled status of the actioned item
      let newUncheckedItems = uncheckedItems

      if (!actionedItem.isLineThrough) {
        // if the actioned item is now unchecked, move it to the top of the unchecked items
        newUncheckedItems = [actionedItem, ...uncheckedItems.filter(item => item.id !== itemId)]
      }

      // combine the items to retain desired order
      updatedItems[altListActive ? 1 : 0] = [...newUncheckedItems, ...checkedItems]

      return updatedItems
    })
  }

  return { handleActionItem }
}

export default useHandleActionItem