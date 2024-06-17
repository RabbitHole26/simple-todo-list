// TODO: instead of removing items form the array I decided not to render them when trash icon is clicked. REASON: introduce new functionality at a later stage od dev, eg: restoring deleted items.

const useHandleDelete = ({ setItemsArray }) => {
  const handleDelete = (index) => {
    setItemsArray(prev => {
      return prev.map((item, i) => {
        return i === index
          ? {...item, isVisible: !item.isVisible}
          : item
      })
    })
  }

  return {handleDelete}
}

export default useHandleDelete