import { useQuoteContext } from "../../context/QuoteContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-solid-svg-icons"

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
      <FontAwesomeIcon icon={faComment} />
    </button>
  )
}

export default ButtonToggleQuote
