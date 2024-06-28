import { useItemsContext } from "../../context/ItemsContext"
import { useListContext } from "../../context/ListContext"

const useConditions = () => {
  const {altListActive, isListLayoutGrid} = useListContext()
  const {items} = useItemsContext()

  const altListInactiveAndMainListEmpty = !altListActive && items[0].length === 0
  const altListActiveAndAltListEmpty = altListActive && items[1].length === 0
  const hideLayoutButton = altListInactiveAndMainListEmpty || altListActiveAndAltListEmpty

  const isMainLayoutGrid = !altListActive && isListLayoutGrid[0] 
  const isAltLayoutGrid = altListActive && isListLayoutGrid[1]
  const isLayoutGrid = isMainLayoutGrid || isAltLayoutGrid

  return {hideLayoutButton, isLayoutGrid}
}

export default useConditions