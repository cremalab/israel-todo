import "./styles.scss"

interface Props {
  name: string
  closeModal: () => void
}

export function SecondarySmallButton(props: Props) {
  return (
    <button
      className="secondary-small secondary-small-text"
      onClick={props.closeModal}
    >
      {props.name}
    </button>
  )
}
