import "./styles.scss"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"
import { useState } from "react"

export function TodoCard() {
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
        <div onClick={handleIconClick}>
          {clicked ? (
            <CheckCircleIcon className="ellipse" />
          ) : (
            <RadioButtonUncheckedIcon className="ellipse" />
          )}
        </div>
        <div className="text-date">
          <p className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            repudiand
          </p>
        </div>
      </div>
    </div>
  )
}
