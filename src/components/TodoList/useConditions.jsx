import { useItemsContext } from "../../context/ItemsContext"
import { useListContext } from "../../context/ListContext"

const useConditions = () => {
  const {isAltListActive, isListLayoutGrid} = useListContext()
  const {items} = useItemsContext()

  const isMainListEmpty = !isAltListActive && items[0].length === 0
  const isAltListEmpty = isAltListActive && items[1].length === 0
  const hideLayoutButton = isMainListEmpty || isAltListEmpty

  const isMainLayoutGrid = !isAltListActive && isListLayoutGrid[0] 
  const isAltLayoutGrid = isAltListActive && isListLayoutGrid[1]
  const isLayoutGrid = isMainLayoutGrid || isAltLayoutGrid

  return {hideLayoutButton, isLayoutGrid}
}

export default useConditions