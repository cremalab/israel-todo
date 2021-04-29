import "./styles.scss"

type Props = {
  name: string
}

export function PrimarySmallButton(props: Props) {
  return (
    <button className="primary-small primary-small-text">{props.name}</button>
  )
}
