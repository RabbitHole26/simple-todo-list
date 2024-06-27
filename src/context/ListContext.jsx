import { createContext, useContext, useState } from "react";

const ListContext = createContext()

const ListProvider = ({children}) => {
  const [altListActive, setAltListActive] = useState(false)

  return (
    <ListContext.Provider value={{
      altListActive,
      setAltListActive
    }}>
      {children}
    </ListContext.Provider>
  )
}

const useListContext = () => useContext(ListContext)

// eslint-disable-next-line react-refresh/only-export-components
export {ListProvider, useListContext}