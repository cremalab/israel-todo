import "./styles.scss"

export interface Props {
  name: string
  onCancel: () => void
}

export function SecondarySmallButton(props: Props) {
  return (
    <button
      className="secondary-small secondary-small-text"
      onClick={props.onCancel}
    >
      {props.name}
    </button>
  )
}
