import { createContext, useContext, useState } from "react";
import setInitialState from "../utils/set-initial-state";
import useLocalStorage from "../hooks/useLocalStorage";

const ListContext = createContext()

const ListProvider = ({children}) => {
  const [isAltListActive, setIsAltListActive] = useState(setInitialState(
    'isAltListActive', 
    false
  ))
  const [isListLayoutGrid, setIsListLayoutGrid] = useState(setInitialState(
    'isListLayoutGrid', 
    [false, false]
  ))

  useLocalStorage('isAltListActive', isAltListActive)

  return (
    <ListContext.Provider value={{
      isAltListActive,
      setIsAltListActive,
      isListLayoutGrid,
      setIsListLayoutGrid
    }}>
      {children}
    </ListContext.Provider>
  )
}

const useListContext = () => useContext(ListContext)

// eslint-disable-next-line react-refresh/only-export-components
export {ListProvider, useListContext}