import { useState } from 'react'
import { isMobile } from 'react-device-detect'
import { useItemsContext } from '../../context/ItemsContext'
import { useThemeContext } from '../../context/ThemeContext'
import useHandleActionItem from '../../hooks/handlers/useHandleActionItem'
import useHandleDeleteItem from '../../hooks/handlers/useHandleDeleteItem'
import useHandleFavoriteItem from '../../hooks/handlers/useHandleFavoriteItem'
import useHandleEditItem from '../../hooks/handlers/useHandleEditItem'
import useConditions from '../../hooks/useConditions'
import ButtonActionItem from '../Buttons/ButtonActionItem'
import ButtonDeleteItem from '../Buttons/ButtonDeleteItem'
import ButtonFavoriteItem from '../Buttons/ButtonFavoriteItem'
import ButtonEditItem from '../Buttons/ButtonEditItem'

const ItemsList = () => {
  // state variables
  const [editItemId, setEditItemId] = useState('')
  const [hoveredItemId, setHoveredItemId] = useState('')
  const [taskInput, setTaskInput] = useState('')

  const { items } = useItemsContext()
  const { isDarkMode } = useThemeContext()

  // conditions
  const {
    isLayoutGrid,
    listIndex
  } = useConditions()

  // handlers
  const { handleActionItem } = useHandleActionItem()
  const { handleDeleteItem } = useHandleDeleteItem()
  const { handleFavoriteItem } = useHandleFavoriteItem()
  const { handleEditItem } = useHandleEditItem()

  return (
    <div className="mx-3 md:mx-[10%] relative">

      {/* to-do item list */}
      <ul className={`pb-[100px] gap-4 ${isLayoutGrid ? 'gridCustom' : 'flex flex-col items-center'}`}>
        {items[listIndex].map((item) => (
          <li
            className={`flex rounded-md text-xl min-h-[112px] sm:min-h-[116px]
              ${isLayoutGrid && !isMobile ? '' : 'min-w-full max-w-full'}
              ${item.isLineThrough && !item.isFavorite ? 'listItemChecked' : ''}
              ${item.isLineThrough && item.isFavorite ? 'listItemCheckedFavorite' : ''} 
              ${item.isFavorite ? 'listItemFavorite' : 'listItem'}
            `}
            key={item.id}
            onMouseEnter={() => {
              !isMobile && setHoveredItemId(item.id)
            }}
            onMouseLeave={() => {
              !isMobile && setHoveredItemId('')
            }}
          >
            <>
              {editItemId !== item.id
                ? (
                  <div className='w-full flex flex-col items-center justify-between p-2'>
                    <p
                      className={`max-w-full break-words 
                        ${item.isLineThrough ? 'lineThrough' : ''}
                        ${hoveredItemId === item.id && !item.isFavorite && !isMobile ? 'text-neutral-100' : ''}
                      `}
                    >
                      {item.task.slice(0, 1).toUpperCase() + item.task.slice(1).toLowerCase()}
                    </p>
                    <div
                      className={`w-full flex flex-row-reverse justify-between gap-6 sm:mb-1 p-2 rounded-md
                        ${hoveredItemId === item.id && !item.isFavorite && !isMobile ? 'text-neutral-100' : ''}
                      `}
                    >
                      <div className='flex flex-row gap-6'>
                        <ButtonActionItem
                          onClick={() => handleActionItem(item.id)}
                          isLineThrough={item.isLineThrough}
                        />
                        <ButtonFavoriteItem
                          onClick={() => handleFavoriteItem(item.id)}
                          isFavorite={item.isFavorite}
                        />
                        <ButtonEditItem
                          onClick={() => setEditItemId(item.id)}
                          variant={'start_edit'}
                        />
                      </div>
                      <ButtonDeleteItem onClick={() => handleDeleteItem(item.id)} />
                    </div>
                  </div>
                )
                : (
                  <form
                    className='w-full flex flex-col items-center justify-between p-2'
                    onSubmit={() => {
                      handleEditItem(item.id, taskInput)
                      setEditItemId('')
                      setTaskInput('')
                    }}
                  >
                    <input
                      className={`rounded-md p-2 max-w-[264px] ${isDarkMode ? 'bg-black' : 'bg-neutral-100'}`}
                      defaultValue={item.task}
                      onChange={e => setTaskInput(e.target.value)}
                    />
                    <div
                      className={`w-full flex justify-end gap-6 p-2 sm:mb-1
                        ${hoveredItemId === item.id && !item.isFavorite && !isMobile ? 'text-neutral-100' : ''}
                      `}
                    >
                      <ButtonEditItem
                        variant={'confirm_edit'}
                        disabled={taskInput.length === 0}
                        className={`${taskInput.length === 0 ? 'text-transparent' : ''}`}
                        type='submit'
                      />
                      <ButtonEditItem
                        variant={'cancel_edit'}
                        onClick={() => {
                          setEditItemId('')
                          setTaskInput('')
                        }}
                      />
                    </div>
                  </form>
                )
              }
            </>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemsList
