import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"

const ButtonEditItem = ({ onClick, variant, disabled = false, className, type = 'button' }) => {
  const startEdit = variant === 'start_edit'
  const confirmEdit = variant === 'confirm_edit'
  const cancelEdit = variant === 'cancel_edit'

  return (
    <button
      className={`flex justify-center items-center faCustomScale
        ${className}
        ${confirmEdit || cancelEdit ? 'text-2xl' : ''}
      `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <FontAwesomeIcon icon={
        startEdit
          ? faPen
          : confirmEdit
            ? faCheck
            : faXmark
      } />
    </button>
  )
}

export default ButtonEditItem
