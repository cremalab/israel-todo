import "./styles.scss"
import { useState } from "react"
import { Todo } from "../../types/Todo"
import { EditTaskModal } from "../EditTaskModal"
import { NewTaskModal } from "../NewTaskModal "
import { TodoListFilter } from "../TodoListFilter"

export function TodoContainer() {
  const [allTodos, setAllTodos] = useState<Todo[]>([])
  const [clicked, setClicked] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editedObject, setEditedObject] = useState<Todo>()
  const [editedText, setEditedText] = useState("")
  // This function will set a todo with useState as the user is typing in a todo

  // Saves todo with ID, isCompleted and todo
  // function which opens modal
  const openModal = () => {
    setShowModal(true)
  }
  // function which closes modal
  const closeModal = () => {
    setShowModal(!showModal)
  }

  const closeEditModal = () => {
    setShowEditModal(false)
  }
  const editTask = (id: string) => {
    const editTodo = allTodos.find((todo) => todo.id === id)
    setEditedText("Hello")
    setEditedObject(editTodo)
    setShowEditModal(true)
    console.log(editedObject)
  }
  // handle on delete
  // const handleOnDelete = (id: string) => {
  //   console.log(id)
  // }
  // function which allows user to mark todo as completed.
  const markAsCompleted = (id: string) => {
    const updatedList = allTodos.map((item) => {
      if (item.id === id) {
        setClicked(!clicked)
        return { ...item, isCompleted: !item.isCompleted }
      }
      return item
    })
    setAllTodos(updatedList)
  }
  return (
    <>
      <div className="wrapper">
        <div className="todos">
          <h3 id="active-tasks">Active Tasks</h3>

          <TodoListFilter
            allTodos={allTodos}
            markAsCompleted={markAsCompleted}
            editTask={editTask}
          />

          <button className="new-task-btn" onClick={openModal}>
            <span id="btn-text">Create New Task</span>
          </button>
          <NewTaskModal
            closeModal={closeModal}
            allTodos={allTodos}
            setAllTodos={setAllTodos}
            showModal={showModal}
          />
          <EditTaskModal
            closeModal={closeEditModal}
            allTodos={allTodos}
            setAllTodos={setAllTodos}
            showEditModal={showEditModal}
            todoText={editedText}
          />
        </div>
      </div>
      <div className="wrapper-completed">
        <div className="completed-todos">
          <TodoListFilter
            allTodos={allTodos}
            isCompleted
            markAsCompleted={markAsCompleted}
            editTask={editTask}
          />
        </div>
      </div>
    </>
  )
}
