import { createContext, useContext, useState } from "react"

const ErrorContext = createContext()

const ErrorProvider = ({children}) => {
  const [error, setError] = useState(false)

  return (
    <ErrorContext.Provider value={{error, setError}}>
      {children}
    </ErrorContext.Provider>
  )
}

const useErrorContext = () => useContext(ErrorContext)

// eslint-disable-next-line react-refresh/only-export-components
export {ErrorProvider, useErrorContext}