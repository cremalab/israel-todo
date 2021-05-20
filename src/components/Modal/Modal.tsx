import { PrimarySmallButton } from "../PrimarySmallButton"
import { SecondarySmallButton } from "../SecondarySmallButton"
import "./styles.scss"

export interface Props {
  closeModal: () => void
  openConfirmModal?: boolean
  handleDelete: () => void
  title: string
}

export function Modal({
  closeModal,
  openConfirmModal,
  title,
  handleDelete,
}: Props) {
  return openConfirmModal ? (
    <div className="modal">
      <div className="new-task">
        <div className="row">
          <h5>{title}</h5>
        </div>
        <div className="btn-div">
          <SecondarySmallButton name="Cancel" closeModal={closeModal} />
          <PrimarySmallButton name="Confirm" onClick={() => handleDelete()} />
        </div>
      </div>
    </div>
  ) : null
}
