import { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useItemsContext } from "../../context/ItemsContext"
import { errorDiv, formWrapper, itemWrapper, liStyle, topLevelWrapperNoBorder } from "../TailwindClassess/TailwindClassess"
import { Button } from '../StyledComponents/Button'
import useHandleAddItem from "../Handlers/use-handle-add-item"
import useHandleActionItem from "../Handlers/use-handle-action-item"
import useHandleDelete from "../Handlers/use-handle-delete-item"
import useHandlErrorPopup from "../Handlers/use-handle-error-popup"
import './Styles.css'

const TodoList = () => {
  // state variables
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  // context and other variables
  const {items, setItems} = useItemsContext()
  const inputRef = useRef()

  // get user data from local storage when the component mounts
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items'))
    if (savedItems)
      setItems(savedItems)
  }, [])

  // save user data to local storage whenever itemsArray is updated
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  /*
  ** HANDLERS
  */

  const {handleAddItem} = useHandleAddItem({
    input, 
    setInput, 
    setError, 
    inputRef
  })

  const {handleActionItem} = useHandleActionItem()

  const {handleDeleteItem} = useHandleDelete()

  const {handleErrorPopup} = useHandlErrorPopup({
    setError,
    inputRef
  })

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <div className={topLevelWrapperNoBorder}>

      {/* to-do item form with input and button */}
      <h2 className='text-2xl text-center sm:text-4xl mb-5'>Simple To-Do list</h2>
      <form className={formWrapper} action="">
        <input 
          type="text"
          value={input}
          ref={inputRef}
          disabled={error}
          id="input"
          className='h-10 rounded-md p-2 flex-auto'
          placeholder=""
          onChange={handleInputChange}
          autoFocus
        />
        <Button 
          $primary 
          disabled={error} 
          className="lightModeSpecialButton flex-auto" 
          onClick={handleAddItem}
        >
          Add Item
        </Button>
      </form>

      <div className="max-w-full">

        {/* error pop-up */}
        {error && 
          (<div className={`lightModeSpecialButtonBorder boxShadow ${errorDiv}`}>
            <p className="text-center">
              You can&rsquo;t add duplicate or empty items.
            </p>
            <Button className="lightModeSpecialButton mx-[25%]" onClick={handleErrorPopup}>Ok</Button>
          </div>)
        }

        {/* to-do item list */}
        <ul className="min-w-[250px] pb-[100px]">
          {items.map((item, index) => (
            <li className={`${liStyle} ${!item.isVisible ? '' : 'listItem'} ${item.isLineThrough ? 'listItemChecked' : ''}`} key={index}>
              {item.isVisible && (
                <div className={`lightModeSpecialList ${itemWrapper}`}>
                  <p className={`max-w-full break-words mt-1 pb-0 ${item.isLineThrough ? 'lineThrough' : ''}`}>
                    {item.text.slice(0, 1).toUpperCase() + item.text.slice(1)}
                  </p>

                  {/* buttons inside the list item */}
                  <div className="todoCustom lightModeSpecialItemButtons flex gap-6 sm:mb-1 p-2 rounded-md">
                    <button className="flex items-center" onClick={() => handleActionItem(index)} >
                      {item.isLineThrough
                        ? <FontAwesomeIcon className="text-2xl faCheckmarkCustom faCustomHover" icon={faCircleXmark} />
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