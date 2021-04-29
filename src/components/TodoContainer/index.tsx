import "./styles.scss"
import { useState } from "react"
import { NewTask } from "../NewTask"
import { TodoCard } from "../TodoCard"

export function TodoContainer() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  return (
    <div className="wrapper">
      <div className="active-todos">
        <h3 id="active-tasks">Active Tasks</h3>
        <TodoCard />
        <button className="new-task-btn" onClick={openModal}>
          <p id="btn-text">Create New Task</p>
        </button>
        {showModal ? <NewTask /> : null}
      </div>
    </div>
  )
}
