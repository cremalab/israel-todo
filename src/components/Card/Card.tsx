import { ReactNode } from "react"
import "./styles.scss"

export interface Props {
  children?: ReactNode
  className?: string
}

export function Card({ className, children }: Props) {
  return <div className={`${className} card`}>{children}</div>
}
