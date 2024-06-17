// TODO: instead of removing items form the array I decided not to render them when trash icon is clicked. REASON: introduce new functionality at a later stage od dev, eg: restoring deleted items.

import { useItemsContext } from "../../context/ItemsContext"

const useHandleDeleteItem = () => {
  const {setItems} = useItemsContext()

  const handleDeleteItem = (index) => {
    setItems(prev => {
      return prev.map((item, i) => {
        return i === index
          ? {...item, isVisible: !item.isVisible}
          : item
      })
    })
  }

  return {handleDeleteItem}
}

export default useHandleDeleteItem