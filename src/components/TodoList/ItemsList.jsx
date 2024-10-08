import { useItemsContext } from '../../context/ItemsContext'
import useHandleActionItem from '../Handlers/use-handle-action-item'
import useHandleDeleteItem from '../Handlers/use-handle-delete-item'
import useConditions from '../../utils/useConditions'
import ButtonActionItem from '../Buttons/ButtonActionItem'
import ButtonDeleteItem from '../Buttons/ButtonDeleteItem'

const ItemsList = () => {
  // state variables
  const {items} = useItemsContext()

  // conditions
  const {
    isLayoutGrid, 
    listIndex
  } = useConditions()

  // handlers
  const {handleActionItem} = useHandleActionItem()
  const {handleDeleteItem} = useHandleDeleteItem()

  return (
    <div className="mx-3 md:mx-[10%] relative">

      {/* to-do item list */}
      <ul className={`pb-[100px] gap-4 ${isLayoutGrid ? 'gridCustom' : 'flex flex-col items-center'}`}>
        {items[listIndex].map((item) => (
          <li 
            className={`text-lg rounded-md sm:text-xl listItem 
              ${item.isLineThrough ? 'listItemChecked' : ''} 
              ${isLayoutGrid ? '' : 'min-w-full max-w-full'}`} 
            key={item.id}
          >
            <div className="h-full flex flex-col p-2 gap-4 items-center justify-between has-hover:hover:text-white">
              <p className={`max-w-full break-words ${item.isLineThrough ? 'lineThrough' : ''}`}>
                {item.task.slice(0, 1).toUpperCase() + item.task.slice(1).toLowerCase()}
              </p>

              <div className="listItemControls flex gap-6 sm:mb-1 p-2 rounded-md">
                <ButtonActionItem onClick={() => handleActionItem(item.id)} item={item} />
                <ButtonDeleteItem onClick={() => handleDeleteItem(item.id)} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemsList
