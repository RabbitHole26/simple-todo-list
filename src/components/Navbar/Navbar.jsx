import { Link } from "react-router-dom"
import { useThemeContext } from "../../context/ThemeContext"
// import { useItemsContext } from "../../context/ItemsContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
// import { exportDataToFile } from "../../utils/handle-data"
import daisyUiRemoveFocus from "../../utils/daisyUi-remove-focus"

const Navbar = () => {
  const {isDarkMode,setIsDarkMode} = useThemeContext()
  // const {items} = useItemsContext()

  // const handleExportData = () => {
  //   daisyUiRemoveFocus()
  //   exportDataToFile(items, "todoItems.json")
  // }

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  return (
    <nav className={`flex flex-row-reverse sticky justify-between top-0 z-50 ${isDarkMode ? 'bg-stone-800 text-white' : 'bg-neutral-400 text-black'}`}>
      <button className='btn btn-ghost px-5 m-1' onClick={toggleTheme}>
        {isDarkMode
          ? <FontAwesomeIcon className="w-[14px]" icon={faSun} />
          : <FontAwesomeIcon className="w-[14px]" icon={faMoon} />
        }
      </button>
      <div className="flex">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className={`menu menu-sm dropdown-content gap-2 mt-1 ml-1 z-[1] p-2 shadow rounded-box w-52 ${isDarkMode ? 'bg-stone-800' : 'bg-neutral-400'}`}>
            <li>
              <Link onClick={() => daisyUiRemoveFocus()} to='/about' className="link link-hover">About</Link>
            </li>
            <li>        
              <Link onClick={() => daisyUiRemoveFocus()} to='https://github.com/RabbitHole26/todo-list-public' className="link link-hover" target="blank">Github</Link>
            </li>
            {/* <li>
              <button className="link link-hover" onClick={handleExportData}>Export list to JSON</button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar