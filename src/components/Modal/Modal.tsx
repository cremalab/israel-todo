// import { PrimarySmallButton } from "../PrimarySmallButton"
// import { SecondarySmallButton } from "../SecondarySmallButton"
import "./styles.scss"
import { ReactNode } from "react"

export interface Props {
  open?: boolean
  children: ReactNode
}

export function Modal({ open, children }: Props) {
  return open ? <div className="modal">{children}</div> : null
}
