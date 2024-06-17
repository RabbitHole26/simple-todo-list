import { useThemeContext } from "../../context/ThemeContext";
import Navbar from "../Navbar/Navbar";

const Layout = ({children}) => {
  const { isDarkMode } = useThemeContext()

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? '' : 'lightMode'}`}>
      <Navbar />
      <div className="flex-grow">
        {children}
      </div>
    </div>
  )
}

export default Layout