import { useQuoteContext } from "../../context/QuoteContext"
import QuoteGenerator from "../../components/QuoteGenerator/QuoteGenerator"
import TodoList from "../../components/TodoList/TodoList"

const HomePage = () => {
  const {showQuote} = useQuoteContext()

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