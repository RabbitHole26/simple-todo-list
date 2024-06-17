import { useThemeContext } from "../../context/ThemeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { exportDataToFile } from "../../utils/handle-data"
import daisyUiRemoveFocus from "../../utils/daisyUi-remove-focus"

const Navbar = ({ todoItems }) => {
  const { toggleTheme, isDarkMode} = useThemeContext()

  const handleExportData = () => {
    daisyUiRemoveFocus()
    exportDataToFile(todoItems, "todoItems.json")
  }

  return (
    <nav className={`flex flex-row-reverse sticky justify-between top-0 ${isDarkMode ? 'bg-stone-800 text-white' : 'bg-neutral-300 text-black'}`}>
      <button className='btn btn-ghost px-5' onClick={toggleTheme}>
        {isDarkMode
          ? <FontAwesomeIcon icon={faSun} />
          : <FontAwesomeIcon icon={faMoon} />
        }
      </button>
      <div className="flex">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-1 ml-1 z-[1] p-2 shadow rounded-box w-52 ${isDarkMode ? 'bg-stone-800' : 'bg-neutral-300'}`}>
            <li>
              <Link onClick={() => daisyUiRemoveFocus()} to='/about' className="link link-hover">About</Link>
            </li>
            <li>        
              <Link onClick={() => daisyUiRemoveFocus()} to='https://github.com/RabbitHole26' className="link link-hover" target="blank">Github</Link>
            </li>
            <li>
              <button className="link link-hover" onClick={handleExportData}>Export list to JSON</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar