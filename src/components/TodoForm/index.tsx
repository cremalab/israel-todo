import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"
import { PrimarySmallButton } from "../PrimarySmallButton"
import { SecondarySmallButton } from "../SecondarySmallButton"
import "./styles.scss"

export interface Props {
  onChange: (value: string) => void
  onSave: () => void
  onCancel: () => void
  title: string
  todoText?: string
  onDelete?: () => void
  placeholder: string
}

export function TodoForm({
  onChange,
  onSave,
  onCancel,
  title,
  todoText,
  onDelete,
  placeholder,
}: Props) {
  return (
    <>
      <div className="row">
        <h5>{title}</h5>
        {onDelete ? (
          <div className="col">
            <DeleteOutlineIcon onClick={onDelete} data-testid="delete-button" />
          </div>
        ) : null}
      </div>

      <input
        id="Task-input"
        type="text"
        value={todoText}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
      <div className="btn-div">
        <SecondarySmallButton name="Cancel" onCancel={onCancel} />
        <PrimarySmallButton name="Save" onClick={() => onSave()} />
      </div>
    </>
  )
}
