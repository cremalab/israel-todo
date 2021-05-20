import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline"
import { PrimarySmallButton } from "../PrimarySmallButton"
import { SecondarySmallButton } from "../SecondarySmallButton"
import "./styles.scss"

export interface Props {
  onChange: (value: string) => void
  onSave: () => void
  closeModal: () => void
  open: boolean
  title: string
  todoText?: string
  displayConfirmModal?: boolean
  showConfirmModal?: () => void
  onDelete?: (id: string) => void
}

export function ModalContainer({
  onChange,
  onSave,
  closeModal,
  open,

  title,
  todoText,
  showConfirmModal,
  onDelete,
}: Props) {
  return open ? (
    <div className="modal">
      <div className="new-task">
        <div className="row">
          <h5>{title}</h5>
          {onDelete ? (
            <div className="col">
              <DeleteOutlineIcon onClick={showConfirmModal} />
            </div>
          ) : null}
        </div>

        <input
          id="Task-input"
          type="text"
          value={todoText}
          placeholder={"Task description"}
          onChange={(event) => onChange(event.target.value)}
        />
        <div className="btn-div">
          <SecondarySmallButton name="Cancel" closeModal={closeModal} />
          <PrimarySmallButton name="Save" onClick={() => onSave()} />
        </div>
      </div>
    </div>
  ) : null
}
