import { useState } from "react"
import { useThemeContext } from "../../context/ThemeContext"
import { useErrorContext } from "../../context/ErrorContext"
import { useRefContext } from "../../context/RefContext"
import { useListContext } from "../../context/ListContext"
import { useQuoteContext } from "../../context/QuoteContext"
import { isMobile } from "react-device-detect"
import useHandleAddItem from "../../hooks/handlers/useHandleActionItem"
import useLocalStorage from "../../hooks/useLocalStorage"
import useToggleListLayout from '../../hooks/handlers/useToggleListLayout'
import QuoteGenerator from "../../components/QuoteGenerator/QuoteGenerator"
import ButtonToggleList from "../../components/Buttons/ButtonToggleList"
import ButtonStyled from "../../components/Buttons/ButtonStyled"
import ButtonToggleListLayout from "../../components/Buttons/ButtonToggleListLayout"
import ItemsList from "../../components/ItemsList/ItemsList"
import './HomePage.css'

const HomePage = () => {
  // state variables
  const [input, setInput] = useState('')
  const {showQuote} = useQuoteContext()
  const {error} = useErrorContext()
  const {isDarkMode} = useThemeContext()
  const {
    setIsAltListActive,
    isListLayoutGrid
  } = useListContext()

  const inputRef = useRefContext()

  // handlers
  const {handleAddItem} = useHandleAddItem({
    input, 
    setInput,
  })

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const toggleList = () => {
    setIsAltListActive(prev => !prev)
  }

  const {toggleListLayout} = useToggleListLayout()

  // local storage
  useLocalStorage('isListLayoutGrid', isListLayoutGrid)

  return (
    <>
      <>
        {showQuote &&
          <QuoteGenerator />
        }
      </>
      <div className="flex flex-col gap-5 pt-10">

        {/* title and fruit button */}
        <div className="flex justify-center items-center mb-4 gap-3">
          <h2 className='text-3xl text-center sm:text-4xl'>Simple To-Do list</h2>
          <ButtonToggleList onClick={toggleList} className={`${isDarkMode ? 'bg-neutral-600' : 'bg-neutral-500'}`} />
        </div>

        {/* form */}
        <form className="flex flex-col justify-center sm:flex-row items-center gap-3 sm:gap-2 mb-5" action="">
            <ButtonToggleListLayout className='hidden sm:flex' onClick={toggleListLayout} />
            
            <input
              id="input"
              type="text"
              value={input}
              ref={inputRef}
              disabled={error}
              className={`h-10 rounded-md p-2 flex-auto max-w-[264px] ${isDarkMode ? 'bg-black' : 'bg-neutral-100'}`}
              onChange={handleInputChange}
              placeholder="Task name..."
              autoFocus
            />
            <ButtonStyled
              $primary
              disabled={error}
              className={`${isMobile ? 'hidden' : ''} sm:flex max-w-[97px]`}
              onClick={handleAddItem}
            >
              Add Item
            </ButtonStyled>
        </form>
      
        {/* item list */}
        <ItemsList />
      </div>
    </>
  )
}

export default HomePage