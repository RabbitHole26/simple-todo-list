// import { useEffect } from "react"
import { useQuoteContext } from "../../context/QuoteContext"
// import useOnlineStatus from "../../hooks/useOnlineStatus"
import QuoteGenerator from "../../components/QuoteGenerator/QuoteGenerator"
import TodoList from "../../components/TodoList/TodoList"

const HomePage = () => {
  const {showQuote} = useQuoteContext()
  // const {isOnline} = useOnlineStatus()

  // useEffect(() => {
  //   isOnline
  //     ? console.log('online')
  //     : console.log('offline')
  // }, [isOnline])

  return (
    <div>
      {showQuote &&
        <QuoteGenerator />
      }
      <TodoList />
    </div>
  )
}

export default HomePage