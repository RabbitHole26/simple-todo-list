const useHandleCheckmarkClick = ({ setItemsArray }) => {
  const handleCheckmarkClick = (index) => {
    setItemsArray(prev => {
      const updatedItems = prev.map((item, i) => {
        return i === index
          ? {...item, isLineThrough: !item.isLineThrough}
          : item
      })
  
      // Separate checked and unchecked items
      const checkedItems = updatedItems.filter(item => item.isLineThrough)
      const uncheckedItems = updatedItems.filter(item => !item.isLineThrough)
  
      // If an item is unchecked, move it to the top
      if (!updatedItems[index].isLineThrough) {
        const uncheckedItem = updatedItems[index]
        const newUncheckedItems = [uncheckedItem, ...uncheckedItems.filter(item => item !== uncheckedItem)]
        return [...newUncheckedItems, ...checkedItems]
      }
  
      return [...uncheckedItems, ...checkedItems]
    })
  }

  return {handleCheckmarkClick}
}

export default useHandleCheckmarkClick