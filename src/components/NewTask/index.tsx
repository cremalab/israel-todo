import { PrimarySmallButton } from "../PrimarySmallButton"
import { SecondarySmallButton } from "../SecondarySmallButton"
import "./styles.scss"

type Props = {
  onChange: (value: string) => void
  onClick: () => void
  closeModal: () => void
  open: boolean
}

export function NewTask({ onChange, onClick, closeModal, open }: Props) {
  return open ? (
    <div className="modal">
      <div className="new-task">
        <h5>New Task</h5>
        <input
          type="text"
          placeholder="Task description"
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
