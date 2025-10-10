import { useQuoteContext } from "../../context/QuoteContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"

const ButtonToggleQuote = () => {
  const {setShowQuote} = useQuoteContext()

  const toggleQuote = () => {
    setShowQuote(prev => !prev)
  }

  return (
    <button 
      className="btn btn-square btn-ghost text-xl"
      onClick={toggleQuote}
    >
      <FontAwesomeIcon icon={faQuoteRight} />
    </button>
  )
}

export default ButtonToggleQuote
