import { useEffect, useState } from "react"
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
import { useListContext } from "../../context/ListContext"

const TodoList = () => {
  // state variables
  const [input, setInput] = useState('')
  const {error} = useErrorContext()
  const {items} = useItemsContext()
  const {isDarkMode} = useThemeContext()
  const {altListActive, setAltListActive} = useListContext()

  const inputRef = useRefContext()

  /*
  ** HANDLERS
  */

  useEffect(() => {
    console.log(items)
  }, [items])

  const {handleActionItem} = useHandleActionItem()

  const {handleDeleteItem} = useHandleDelete()

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

  return (
    <div className="flex flex-col md:items-center m-3 gap-5 pt-10 sm:p-10">

      {/* to-do item form with input and button */}
      <div className="flex justify-center items-center mb-4 gap-3">
        <h2 className='text-2xl text-center sm:text-4xl'>Simple To-Do list</h2>
        <button type="button" onClick={toggleList} className="bg-transparent text-2xl sm:text-3xl">
            {altListActive
              ? <span>🍓</span>
              : <span>🍌</span>
            }
        </button>
      </div>
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
            className="lightModeButtonTextColor flex-auto max-w-[97px]"
            onClick={handleAddItem}
          >
            Add Item
          </Button>

      </form>

      <div className="max-w-full relative">

        {/* to-do item list */}
        <ul className="min-w-[250px] pb-[100px]">
          {items[altListActive ? 1 : 0].map((item) => (
            <li className={`text-lg sm:text-xl min-w-[100px] listItem ${item.isLineThrough ? 'listItemChecked' : ''}`} key={item.id}>
              <div className={`lightModeSpecialList w-full flex flex-col gap-[20px] sm:gap-[30px] items-center place-content-between`}>
                <p className={`max-w-full break-words mt-1 pb-0 ${item.isLineThrough ? 'lineThrough' : ''}`}>
                  {item.task.slice(0, 1).toUpperCase() + item.task.slice(1).toLowerCase()}
                </p>

                <div className="listItemControls lightModeButtonTextColor flex gap-6 sm:mb-1 p-2 rounded-md">
                  <button className="flex items-center" onClick={() => handleActionItem(item.id)} >
                    {item.isLineThrough
                      ? <FontAwesomeIcon className="text-2xl faCheckmarkCustom faCustomHover" icon={faRotateLeft} />
                      : <FontAwesomeIcon className="text-2xl faCheckmarkCustom faCustomHover" icon={faCheck} />
                    }
                  </button>
                  <button className="flex items-center" onClick={() => handleDeleteItem(item.id)}>
                    <FontAwesomeIcon className="text-2xl faCustomHover" icon={faTrash} />
                  </button>
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList