import "./styles.scss"

export interface Props {
  id?: string
  name: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function PrimarySmallButton(props: Props) {
  return (
    <button
      className="primary-small primary-small-text"
      onClick={props.onClick}
      id={props.id}
    >
      {props.name}
    </button>
  )
}
