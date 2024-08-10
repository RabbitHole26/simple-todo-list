import { createContext, useContext, useState } from "react"
import useLocalStorage from "../utils/useLocalStorage"
import setInitialState from "../utils/set-initial-state"

const QuoteContext = createContext()

const QuoteProvider = ({children}) => {
  const [showQuote, setShowQuote] = useState(setInitialState('showQuote', true))

  useLocalStorage('showQuote', showQuote)

  return (
    <QuoteContext.Provider value={{
      showQuote,
      setShowQuote
    }}>
      {children}
    </QuoteContext.Provider>
  )
}

const useQuoteContext = () => useContext(QuoteContext)

// eslint-disable-next-line react-refresh/only-export-components
export {QuoteProvider, useQuoteContext}
