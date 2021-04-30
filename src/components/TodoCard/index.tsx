import "./styles.scss"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"
import { useState } from "react"

type Props = {
  todo: string
}

export function TodoCard(props: Props) {
  const [clicked, setClicked] = useState(false)

  const handleIconClick = (): void => {
    if (!clicked) {
      setClicked(true)
    } else {
      setClicked(false)
    }

    // change <AddCircleIcon /> to <BlockIcon /> at "id"
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
          <p className="text">{props.todo}</p>
        </div>
      </div>
    </div>
  )
}
