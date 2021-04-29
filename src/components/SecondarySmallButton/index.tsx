import "./styles.scss"

type Props = {
  name: string
}

export function SecondarySmallButton(props: Props) {
  return (
    <button className="secondary-small secondary-small-text">
      {props.name}
    </button>
  )
}
