import { useThemeContext } from '../../context/ThemeContext'
import { useItemsContext } from '../../context/ItemsContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useListContext } from '../../context/ListContext'
import { faTrash, faCheck, faRotateLeft, faGripVertical, faListUl } from '@fortawesome/free-solid-svg-icons'
import useHandleActionItem from '../Handlers/use-handle-action-item'
import useHandleDeleteItem from '../Handlers/use-handle-delete-item'
import useConditions from './useConditions'

const ItemsList = () => {
  // state variables
  const {isDarkMode} = useThemeContext()
  const {items} = useItemsContext()
  const {
    altListActive, 
    isListLayoutGrid, 
    setIsListLayoutGrid
  } = useListContext()

  // handlers
  const {handleActionItem} = useHandleActionItem()

  const {handleDeleteItem} = useHandleDeleteItem()

  const toggleListLayout = () => {
    setIsListLayoutGrid(prev => {
      const updatedValues = [...prev]
      updatedValues[altListActive ? 1 : 0] = !isListLayoutGrid[altListActive ? 1: 0]
      return updatedValues
    })
  }

    // conditions
    const {hideLayoutButton, isLayoutGrid} = useConditions()

  return (
    <div className="max-w-full mx-3 md:mx-[10%] relative">
      {!hideLayoutButton &&
        <button onClick={toggleListLayout} className={`absolute hidden btn-circle btn-sm z-30 m-1 sm:flex justify-center items-center ${isDarkMode ? 'bg-red-500' : 'bg-red-300'}`}>
          {isLayoutGrid
            ? <FontAwesomeIcon icon={faListUl} />
            : <FontAwesomeIcon icon={faGripVertical} /> 
          }
        </button>
      }

      {/* to-do item list */}
      <ul className={`pb-[100px] gap-4 ${isLayoutGrid ? 'gridCustom' : 'flex flex-col items-center'}`}>
        {items[altListActive ? 1 : 0].map((item) => (
          <li className={`text-lg rounded-md sm:text-xl listItem ${item.isLineThrough ? 'listItemChecked' : ''} ${isLayoutGrid ? '' : 'min-w-[350px]'}`} key={item.id}>
            <div className={`lightModeSpecialList h-full flex flex-col p-2 gap-4 items-center justify-between`}>
              <p className={`max-w-full break-words ${item.isLineThrough ? 'lineThrough' : ''}`}>
                {item.task.slice(0, 1).toUpperCase() + item.task.slice(1).toLowerCase()}
              </p>

              <div className="listItemControls lightModeButtonTextColor flex gap-6 sm:mb-1 p-2 rounded-md">
                <button className="flex w-[24px]" onClick={() => handleActionItem(item.id)} >
                  {item.isLineThrough
                    ? <FontAwesomeIcon className="text-2xl active:scale-[0.8] faCheckmarkCustom faCustomHover" icon={faRotateLeft} />
                    : <FontAwesomeIcon className="text-2xl active:scale-[0.8] faCheckmarkCustom faCustomHover" icon={faCheck} />
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
  )
}

export default ItemsList
