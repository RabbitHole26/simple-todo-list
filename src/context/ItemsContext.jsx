import { createContext, useContext, useState } from "react"
import setInitialState from "../utils/set-initial-state"
import useLocalStorage from "../utils/useLocalStorage"

const ItemsContext = createContext()

const ItemsProvider = ({children}) => {
  const [items, setItems] = useState(setInitialState('items', []))

  useLocalStorage('items', items)

  return (
    <ItemsContext.Provider value={{items, setItems}}>
      {children}
    </ItemsContext.Provider>
  )
}

const useItemsContext = () => useContext(ItemsContext)

// eslint-disable-next-line react-refresh/only-export-components
export {ItemsProvider, useItemsContext}