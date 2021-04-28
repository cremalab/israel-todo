import "./styles.scss"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"
import { useState } from "react"
import { NewTask } from "../NewTask"

export function App() {
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
    <div className="App">
      <div id="header">
        <p id="header-title">My Tasks</p>
      </div>

      <div className="active">
        <div className="content">
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
      <NewTask />
      <h3 id="active-tasks">Active Tasks</h3>

      <button
        className="large"
        onClick={() => {
          console.log("clicked")
        }}
      >
        <p id="btn-text">Create New Task</p>
      </button>
    </div>
  )
}
