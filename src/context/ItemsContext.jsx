import { createContext, useContext, useState } from "react"

const ItemsContext = createContext()

const ItemsProvider = ({children}) => {
  const [items, setItems] = useState([])

  return (
    <ItemsContext.Provider value={{items, setItems}}>
      {children}
    </ItemsContext.Provider>
  )
}

const useItemsContext = () => useContext(ItemsContext)

// eslint-disable-next-line react-refresh/only-export-components
export {ItemsProvider, useItemsContext}
