import { createContext, useContext, useState } from "react";
import setInitialState from "../utils/set-initial-state";

const ListContext = createContext()

const ListProvider = ({children}) => {
  const [altListActive, setAltListActive] = useState(false)
  const [isListLayoutGrid, setIsListLayoutGrid] = useState(setInitialState('isListLayoutGrid', [false, false]))

  return (
    <ListContext.Provider value={{
      altListActive,
      setAltListActive,
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