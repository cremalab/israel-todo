import "./styles.scss"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { Todo } from "../../types/Todo"
import { NewTask } from "../NewTask"
import { TodoCard } from "../TodoCard"

export function TodoContainer() {
  const [showModal, setShowModal] = useState(false)
  const [todo, setTodo] = useState("")
  const [allTodos, setAllTodos] = useState<Todo[]>([])

  const handleChangeEvent = (value: string): void => {
    setTodo(value)
  }
  const handleSaveTodo = () => {
    const newTodo: Todo = { id: uuidv4(), todo, isCompleted: false }

    if (todo && !allTodos.includes(newTodo)) {
      setAllTodos([...allTodos, newTodo])
      setShowModal(false)
      setTodo("")
    } else {
      alert("You must Enter todo to save!")
    }
  }
  console.log(todo)
  console.log(allTodos)
  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    console.log("clicked")
    setShowModal(!showModal)
  }

  return (
    <div className="wrapper">
      <div className="todos">
        <h3 id="active-tasks">Active Tasks</h3>
        {allTodos.map(({ todo, id }) => {
          return <TodoCard todo={todo} key={id} />
        })}

        <button className="new-task-btn" onClick={openModal}>
          <p id="btn-text">Create New Task</p>
        </button>
        <NewTask
          onClick={handleSaveTodo}
          onChange={handleChangeEvent}
          closeModal={closeModal}
          open={showModal}
        />
      </div>
    </div>
  )
}
