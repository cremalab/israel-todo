import "./styles.scss"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"
// import { useState } from "react"

export interface Props {
  todo: string
  isCompleted?: boolean
  handleIconClick: () => void
  clicked: boolean
}

export function TodoCard(props: Props) {
  // Class is determined by whether a todo is completed. This is handled on the TodoContainer
  const completedClass = props.isCompleted ? " text striked-text" : "text"

  return (
    <div className="card">
      <div className="card-content">
        <div className="ellipse-div" onClick={props.handleIconClick}>
          {props.clicked ? (
            <CheckCircleIcon className="ellipse" />
          ) : (
            <RadioButtonUncheckedIcon className="ellipse" />
          )}
        </div>
        <div className="text-date-section">
          <p className={completedClass}>{props.todo}</p>
        </div>
      </div>
    </div>
  )
}
