import "./styles.scss"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"
import { useState } from "react"

export interface Props {
  todo: string
  isCompleted?: boolean
}

export function TodoCard(props: Props) {
  const completedClass = props.isCompleted ? " text striked-text" : "text"
  const [clicked, setClicked] = useState(false)

  const handleIconClick = (): void => {
    if (!clicked) {
      setClicked(true)
    } else {
      setClicked(false)
    }
  }
  return (
    <div className="card">
      <div className="card-content">
        <div className="ellipse-div" onClick={handleIconClick}>
          {clicked ? (
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
