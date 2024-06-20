import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"
import { Button } from "../StyledComponents/Button"
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
      <div className={`lightModeBorderBottom flex flex-col items-center m-3 mt-0 md:mx-[10%] gap-5 border-b p-10`}>
        <h2 className='hidden sm:block sm:text-2xl'>Quote of the day!</h2>
        {renderContent}
        <Button $primary className="hidden lightModeButtonTextColor sm:block" onClick={handleClick}>New Quote</Button>
      </div>
    </>
  )
}

export default QuotableApi
