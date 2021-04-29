import { ChangeEvent, useState } from "react"
import { PrimarySmallButton } from "../PrimarySmallButton"
import { SecondarySmallButton } from "../SecondarySmallButton"
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
        <h5>New Task</h5>
        <input
          type="text"
          placeholder="Task description"
          onChange={handleChangeEvent}
        />
        <div className="btn-div">
          <SecondarySmallButton name="Cancel" />
          <PrimarySmallButton name="Save" />
        </div>
      </div>
    </div>
  )
}
