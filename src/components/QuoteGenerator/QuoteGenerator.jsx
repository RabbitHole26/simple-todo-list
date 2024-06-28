import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { Button } from "../StyledComponents/Button"
import { useThemeContext } from '../../context/ThemeContext'
import './Styles.css'

const QuoteGenerator = () => {
  const [data, setData] = useState([{ q: "", a: "" }])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const {isDarkMode} = useThemeContext()

  const corsProxyUrl = 'https://corsproxy.io/?'
  const fetchUrl = 'https://zenquotes.io/api/random'
  const randomFactor = Math.random()

  async function fetchRandomQuote () {
    try {
        // ! prevenet issues caused by browser caching by assigning randomFactor as a string parameter to the fetch call
        // * with the randomFactor concatenated into the string browser recognizes each fetch request as a new request. 
        // * if the fetch url stays static with each call some browsers may serve the response for the initial calls to all subsequent calls
      const response = await fetch(corsProxyUrl + fetchUrl + '?' + randomFactor)
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleClick = () => {
    setIsLoading(true)
    fetchRandomQuote()
  }

  const renderQuote =
    error 
      ? <p>{error}</p> 
      : <ul id="textShadowColor" className="text-md sm:text-l">
          <li>&quot;{data[0].q}&quot;</li>
          <li>{data[0].a}</li>
        </ul>

  const renderContent =
    isLoading
      ? <div className="min-h-[60px]">
          {isDarkMode
            ? <ClipLoader color="white" size={50} />
            : <ClipLoader color="black" size={50} />
          }
        </div>
      : <div className="min-h-[60px]">
          {renderQuote}
        </div>
  
  return (
    <>
      <div className={`lightModeBorderBottom flex flex-col items-center mx-3 md:mx-10 gap-5 border-b p-10`}>
        <h2 className='hidden sm:block sm:text-2xl'>Quote of the day!</h2>
        {renderContent}
        <Button $primary className="hidden lightModeButtonTextColor sm:block" onClick={handleClick}>New Quote</Button>
      </div>
    </>
  )
}

export default QuoteGenerator
