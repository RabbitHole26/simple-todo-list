import { useListContext } from "../../context/ListContext"
import useConditions from "../../utils/useConditions"

const useToggleListLayout = () => {
  const {listIndex} = useConditions()

  const {
    isListLayoutGrid, 
    setIsListLayoutGrid
  } = useListContext()

  const toggleListLayout = () => {
    setIsListLayoutGrid(prev => {
      const updatedValues = [...prev]
      updatedValues[listIndex] = !isListLayoutGrid[listIndex]
      return updatedValues
    })
  }

  return {toggleListLayout}
}

export default useToggleListLayout