  const daisyUiRemoveFocus = () => {
    const dropdownElement = document.activeElement
    dropdownElement?.blur()
  }

  export default daisyUiRemoveFocus