import { ReactNode } from "react"
import "./styles.scss"

interface Props {
  children: ReactNode
}

export function Sticky(props: Props) {
  return <div className="sticky">{props.children}</div>
}
