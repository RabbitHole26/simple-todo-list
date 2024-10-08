import { createContext, useContext, useState } from "react"
import setInitialState from "../utils/set-initial-state"
import useLocalStorage from "../utils/useLocalStorage"
import createTask from "../utils/createTask"

const ItemsContext = createContext()

const ItemsProvider = ({children}) => {
  const [items, setItems] = useState(setInitialState(
    'items', 
    [
      [createTask('This is the primary list, click/tap the 🍌 to see the alternative list!')], 
      [createTask('This is the alternative list, click/tap the 🍓 to see the primary list!')]
    ]
  ))

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