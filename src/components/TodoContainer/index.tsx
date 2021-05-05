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
  const [clicked, setClicked] = useState(false)

  // Function that handles the check circle (whether it is clicked or not)
  const handleIconClick = (): void => {
    if (!clicked) {
      setClicked(true)
    } else {
      setClicked(false)
    }
  }
  // This function will set a todo with useState as the user is typing in a todo
  const handleChangeEvent = (value: string): void => {
    setTodo(value)
  }
  // Saves todo with ID, isCompleted and todo
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
  // function which opens modal
  const openModal = () => {
    setShowModal(true)
  }
  // function which closes modal
  const closeModal = () => {
    console.log("clicked")
    setShowModal(!showModal)
  }
  // function which allows user to mark todo as completed.
  const markAsCompleted = (id: string) => {
    handleIconClick()
    const updatedList = allTodos.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted }
      }
      return item
    })
    setAllTodos(updatedList)
  }
  return (
    <div className="wrapper">
      <div className="todos">
        <h3 id="active-tasks">Active Tasks</h3>
        {allTodos.map(({ todo, id, isCompleted }) => {
          return (
            <TodoCard
              todo={todo}
              key={id}
              handleIconClick={() => markAsCompleted(id)}
              clicked={clicked}
              isCompleted={isCompleted}
            />
          )
        })}

        <button className="new-task-btn" onClick={openModal}>
          <span id="btn-text">Create New Task</span>
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
