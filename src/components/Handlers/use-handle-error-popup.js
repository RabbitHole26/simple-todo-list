import { useErrorContext } from "../../context/ErrorContext"
import { useInputRefContext } from "../../context/inputRefContext"

const useHandlErrorPopup = ({ setIsFadingOut }) => {
  const {setError} = useErrorContext()

  const inputRef = useInputRefContext()
  
  const handleErrorPopup = () => {
    setIsFadingOut(true)
    // set timeout is to delay setError(false) by the duration of the fadeOut animation
    // ! fadeIn/fadeOut animation is set up in tailwind.config.js

    setTimeout(() => {
      setError(false)
      setIsFadingOut(false)
      inputRef.current.disabled = false
      inputRef.current.focus()
    }, 200)
  }
  return {handleErrorPopup}
}

export default useHandlErrorPopup