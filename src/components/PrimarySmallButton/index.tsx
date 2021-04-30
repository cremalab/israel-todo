import "./styles.scss"

type Props = {
  name: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export function PrimarySmallButton(props: Props) {
  return (
    <button
      className="primary-small primary-small-text"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  )
}
