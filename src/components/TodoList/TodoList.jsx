import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck, faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { useItemsContext } from "../../context/ItemsContext"
import { useThemeContext } from "../../context/ThemeContext"
import { useErrorContext } from "../../context/ErrorContext"
import { useRefContext } from "../../context/RefContext"
import { Button } from '../StyledComponents/Button'
import useHandleAddItem from "../Handlers/use-handle-add-item"
import useHandleActionItem from "../Handlers/use-handle-action-item"
import useHandleDelete from "../Handlers/use-handle-delete-item"
import './Styles.css'

const TodoList = () => {
  // state variables
  const [input, setInput] = useState('')
  const {error} = useErrorContext()
  const {items} = useItemsContext()
  const {isDarkMode} = useThemeContext()

  const inputRef = useRefContext()

  /*
  ** HANDLERS
  */

  const {handleActionItem} = useHandleActionItem()

  const {handleDeleteItem} = useHandleDelete()

  const {handleAddItem} = useHandleAddItem({
    input, 
    setInput,
  })

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <div className="flex flex-col md:items-center m-3 gap-5 pt-10 sm:p-10">

      {/* to-do item form with input and button */}
      <h2 className='text-2xl text-center sm:text-4xl mb-5'>Simple To-Do list</h2>
      <form className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 mb-5" action="">
        <input
          id="input"
          type="text"
          value={input}
          ref={inputRef}
          disabled={error}
          className={`h-10 rounded-md p-2 flex-auto ${isDarkMode ? 'bg-black' : 'bg-neutral-100'}`}
          onChange={handleInputChange}
          autoFocus
        />
        <Button 
          $primary 
          disabled={error} 
          className="lightModeButtonTextColor flex-auto" 
          onClick={handleAddItem}
        >
          Add Item
        </Button>
      </form>

      <div className="max-w-full relative">

        {/* to-do item list */}
        <ul className="min-w-[250px] pb-[100px]">
          {items.map((item, index) => (
            <li className={`text-lg sm:text-xl min-w-[100px] ${!item.isVisible ? '' : 'listItem'} ${item.isLineThrough ? 'listItemChecked' : ''}`} key={index}>
              {item.isVisible && (
                <div className={`lightModeSpecialList w-full flex flex-col gap-[20px] sm:gap-[30px] items-center place-content-between`}>
                  <p className={`max-w-full break-words mt-1 pb-0 ${item.isLineThrough ? 'lineThrough' : ''}`}>
                    {item.text.slice(0, 1).toUpperCase() + item.text.slice(1)}
                  </p>

                  <div className="listItemControls lightModeButtonTextColor flex gap-6 sm:mb-1 p-2 rounded-md">
                    <button className="flex items-center" onClick={() => handleActionItem(index)} >
                      {item.isLineThrough
                        ? <FontAwesomeIcon className="text-2xl faCheckmarkCustom faCustomHover" icon={faRotateLeft} />
                        : <FontAwesomeIcon className="text-2xl faCheckmarkCustom faCustomHover" icon={faCheck} />
                      }
                    </button>
                    <button className="flex items-center" onClick={() => handleDeleteItem(index)}>
                      <FontAwesomeIcon className="text-2xl faCustomHover" icon={faTrash} />
                    </button>
                  </div>

                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList