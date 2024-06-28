import { useState } from "react"
import { useThemeContext } from "../../context/ThemeContext"
import { useErrorContext } from "../../context/ErrorContext"
import { useRefContext } from "../../context/RefContext"
import { useListContext } from "../../context/ListContext"
import { Button } from '../StyledComponents/Button'
import useHandleAddItem from "../Handlers/use-handle-add-item"
import useLocalStorage from "../../utils/useLocalStorage"
import ItemsList from "./ItemsList"
import './Styles.css'

const TodoList = () => {
  // state variables
  const [input, setInput] = useState('')
  const {error} = useErrorContext()
  const {isDarkMode} = useThemeContext()
  const {
    altListActive, 
    setAltListActive,
    isListLayoutGrid,
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
    setAltListActive(prev => !prev)
  }

  // local storage

  useLocalStorage('isListLayoutGrid', isListLayoutGrid)

  return (
    <div className="flex flex-col gap-5 pt-10">

      {/* title and fruit button */}
      <div className="flex justify-center items-center mb-4 gap-3">
        <h2 className='text-3xl text-center sm:text-4xl'>Simple To-Do list</h2>
        <button type="button" onClick={toggleList} className={`btn-square text-3xl sm:text-4xl rounded-md ${isDarkMode ? 'bg-transparent' : 'bg-neutral-500'}`}>
            {altListActive
              ? <div className="py-[3px]">🍓</div>
              : <div className="py-[3px]">🍌</div>
            }
        </button>
      </div>

      {/* form */}
      <form className="flex flex-col justify-center sm:flex-row items-center gap-3 sm:gap-2 mb-5" action="">
          <input
            id="input"
            type="text"
            value={input}
            ref={inputRef}
            disabled={error}
            className={`h-10 rounded-md p-2 flex-auto max-w-[264px] ${isDarkMode ? 'bg-black' : 'bg-neutral-100'}`}
            onChange={handleInputChange}
            autoFocus
          />
          <Button
            $primary
            disabled={error}
            className="lightModeButtonTextColor flex-auto max-w-[97px]"
            onClick={handleAddItem}
          >
            Add Item
          </Button>
      </form>
    
      {/* item list */}
      <ItemsList />
    </div>
  )
}

export default TodoList