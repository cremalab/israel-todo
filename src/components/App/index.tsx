import "./styles.scss"
// import CheckCircleIcon from "@material-ui/icons/CheckCircle"
// import MenuIcon from "@material-ui/icons/Menu"
// import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"
// import { useState } from "react"
import { Header } from "../Header"
import { NewTask } from "../NewTask"

export function App() {
  // const [clicked, setClicked] = useState(false)

  // const handleIconClick = (): void => {
  //   if (!clicked) {
  //     setClicked(true)
  //   } else {
  //     setClicked(false)
  //   }

  // change <AddCircleIcon /> to <BlockIcon /> at "id"
  // }
  return (
    <div className="App">
      <Header />
      {/* 
      <div className="wrapper">
        <div className="active-todos">
          <h3 id="active-tasks">Active Tasks</h3>
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Pariatur repudiand
                </p>
              </div>
            </div>
          </div>
          <button
            className="new-task-btn"
            onClick={() => {
              console.log("clicked")
            }}
          >
            <p id="btn-text">Create New Task</p>
          </button>
        </div>
      </div> */}
      <NewTask />
    </div>
  )
}
