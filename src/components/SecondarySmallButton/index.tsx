import "./styles.scss"

type Props = {
  name: string
  // onClick: React.MouseEventHandler<HTMLButtonElement>
}

export function SecondarySmallButton(props: Props) {
  return (
    <button
      className="secondary-small secondary-small-text"
      // onClick={props.onClick}
    >
      {props.name}
    </button>
  )
}
