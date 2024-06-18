import { createContext, useContext, useState } from "react"
import useLocalStorage from "../utils/useLocalStorage"
import setInitialState from "../utils/set-initial-state"

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
