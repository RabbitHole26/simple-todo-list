import { createContext, useContext, useRef } from "react"

const InputRefContext = createContext()

const InputRefProvider = ({children}) => {
  const inputRef = useRef()

  return (
    <InputRefContext.Provider value={inputRef}>
      {children}
    </InputRefContext.Provider>
  )
}

const useInputRefContext = () => useContext(InputRefContext)

// eslint-disable-next-line react-refresh/only-export-components
export {InputRefProvider, useInputRefContext}