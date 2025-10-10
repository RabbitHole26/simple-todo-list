import { useItemsContext } from '../../context/ItemsContext'
import useHandleActionItem from '../../hooks/handlers/useHandleActionItem'
import useHandleDeleteItem from '../../hooks/handlers/useHandleDeleteItem'
import useHandleFavoriteItem from '../../hooks/handlers/useHandleFavoriteItem'
import useConditions from '../../hooks/useConditions'
import ButtonActionItem from '../Buttons/ButtonActionItem'
import ButtonDeleteItem from '../Buttons/ButtonDeleteItem'
import ButtonFavoriteItem from '../Buttons/ButtonFavoriteItem'

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
  const {handleFavoriteItem} = useHandleFavoriteItem()

  return (
    <div className="mx-3 md:mx-[10%] relative">

      {/* to-do item list */}
      <ul className={`pb-[100px] gap-4 ${isLayoutGrid ? 'gridCustom' : 'flex flex-col items-center'}`}>
        {items[listIndex].map((item) => (
          <li 
            className={`text-lg rounded-md sm:text-xl 
              ${item.isLineThrough ? 'listItemChecked' : ''} 
              ${isLayoutGrid ? '' : 'min-w-full max-w-full'}
              ${item.isFavorite ? 'listItemFavorite' : 'listItem'}`} 
            key={item.id}
          >
            <div className={`h-full flex flex-col p-2 gap-4 items-center justify-between ${item.isFavorite ? 'has-hover:text-black' : 'has-hover:hover:text-white'}`}>
              <p className={`max-w-full break-words ${item.isLineThrough ? 'lineThrough' : ''}`}>
                {item.task.slice(0, 1).toUpperCase() + item.task.slice(1).toLowerCase()}
              </p>

              <div className="listItemControls flex gap-6 sm:mb-1 p-2 rounded-md">
                <ButtonActionItem onClick={() => handleActionItem(item.id)} item={item} />
                <ButtonDeleteItem onClick={() => handleDeleteItem(item.id)} />
                <ButtonFavoriteItem onClick={() => handleFavoriteItem(item.id)} isFavorite={item.isFavorite} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemsList
