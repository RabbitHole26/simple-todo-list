import { useState } from "react";
import { useErrorContext } from "../context/ErrorContext";
import { useThemeContext } from "../context/ThemeContext";
import Navbar from "../components/Navbar/Navbar";
import useHandlErrorPopup from "../hooks/handlers/useHandleErrorPopup";
import ButtonStyled from "../components/Buttons/ButtonStyled";

const Layout = ({children}) => {
  const {isDarkMode} = useThemeContext()
  const {error} = useErrorContext()
  const [isFadingOut, setIsFadingOut] = useState(false)

  const {handleErrorPopup} = useHandlErrorPopup({setIsFadingOut})

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? '' : 'lightMode'}`}>
      <Navbar />
      {error &&
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
          <div className={`lightModeBorder max-w-[350px] boxShadow border rounded-md p-5 mb-8 flex flex-col gap-2 ${isFadingOut ? 'animate-fadeOut' : 'animate-fadeIn'} ${isDarkMode ? 'bg-stone-800' : 'bg-neutral-400'}`}>
            <p className="text-center">
              You can&rsquo;t add duplicate or empty items.
            </p>
            <ButtonStyled className="mx-[25%]" onClick={handleErrorPopup}>Ok</ButtonStyled>
          </div>
        </div>
      }
      <div className={`flex-grow ${error ? 'opacity-20' : 'opacity100'}`}>
        {children}
      </div>
    </div>
  )
}

export default Layout