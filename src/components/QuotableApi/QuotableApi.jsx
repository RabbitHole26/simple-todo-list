import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { Button } from "../StyledComponents/Button"
import { topLevelWrapper } from "../TailwindClassess/TailwindClassess"
import { useThemeContext } from '../../context/ThemeContext'
import './Styles.css'

const QuotableApi = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const {isDarkMode} = useThemeContext()

  async function fetchRandomQuote () {
    try {
      const response = await fetch('https://api.quotable.io/random')
      if (!response.ok)
        throw new Error('Failed to fetch a random quote.')
      const quote = await response.json()
      setData(quote)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  
  useEffect(() => {
    fetchRandomQuote()
  },[])

  const handleClick = () => {
    setIsLoading(true)
    fetchRandomQuote()
  }

  const renderQuote =
    error 
      ? <p>{error}</p> 
      : <ul id="textShadowColor" className="text-md sm:text-l">
          <li>&quot;{data.content}&quot;</li>
          <li>{data.author}</li>
        </ul>

  const renderContent =
    isLoading
      ? <div>
          {isDarkMode
            ? <ClipLoader color="white" size={50} />
            : <ClipLoader color="black" size={50} />
          }
        </div>
      : renderQuote
  
  return (
    <>
      <div className={`lightModeSpecialQuotableApi ${topLevelWrapper}`}>
        <h2 className='hidden sm:block sm:text-2xl'>Quote of the day!</h2>
        {renderContent}
        <Button $primary className="hidden lightModeSpecialButton sm:block" onClick={handleClick}>New Quote</Button>
      </div>
    </>
  )
}

export default QuotableApi
