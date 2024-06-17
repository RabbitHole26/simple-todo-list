const useHandlErrorPopup = ({ setError, inputRef }) => {
  const handleErrorPopup = () => {
    setError(false)
    inputRef.current.disabled = false
    inputRef.current.focus()
  }

  return {handleErrorPopup}
}

export default useHandlErrorPopup


