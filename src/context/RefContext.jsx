import { createContext, useContext, useRef } from "react"

const RefContext = createContext()

const RefProvider = ({children}) => {
  const inputRef = useRef()

  return (
    <RefContext.Provider value={inputRef}>
      {children}
    </RefContext.Provider>
  )
}

const useRefContext = () => useContext(RefContext)

// eslint-disable-next-line react-refresh/only-export-components
export {RefProvider, useRefContext}