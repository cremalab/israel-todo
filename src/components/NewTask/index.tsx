import { ChangeEvent, useState } from "react"

import "./styles.scss"

export function NewTask() {
  const [todo, setTodo] = useState("")

  const handleChangeEvent = (event: ChangeEvent<HTMLInputElement>): void => {
    setTodo(event.target.value)
  }
  console.log(todo)
  return (
    <div className="wrapper">
      <div className="new-task">
        <p>New Task</p>
        <input
          type="text"
          placeholder="Task description"
          onChange={handleChangeEvent}
        />
        <div className="btn-div">
          <button className="secondary-small" id="cancel">
            Cancel
          </button>
          <button className="primary-small" id="save">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
