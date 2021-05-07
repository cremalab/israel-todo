import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"
import { PrimarySmallButton } from "../PrimarySmallButton"
import { SecondarySmallButton } from "../SecondarySmallButton"
import "./styles.scss"

export interface Props {
  onChange: (value: string) => void
  onClick: () => void
  closeModal: () => void
  open: boolean
  onDelete?: () => void
  title: string
  todoText?: string
}

export function ModalContainer({
  onChange,
  onClick,
  closeModal,
  open,
  onDelete,
  title,
  todoText,
}: Props) {
  const placeholderText = onDelete ? todoText : "Task description"
  return open ? (
    <div className="modal">
      <div className="new-task">
        {/* {will need to add props for the title } */}
        {/* {add div with flex direction as row } */}
        <div className="row">
          <h5>{title}</h5>
          {onDelete ? (
            <div className="col">
              <DeleteOutlineIcon onClick={onDelete} />
            </div>
          ) : null}
        </div>

        <input
          id="Task-input"
          type="text"
          placeholder={placeholderText}
          onChange={(event) => onChange(event.target.value)}
        />
        <div className="btn-div">
          <SecondarySmallButton name="Cancel" closeModal={closeModal} />
          <PrimarySmallButton name="Save" onClick={() => onClick()} />
        </div>
      </div>
    </div>
  ) : null
}
