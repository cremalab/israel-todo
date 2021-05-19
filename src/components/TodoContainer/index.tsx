import "./styles.scss"
import { useState } from "react"
import { Todo } from "../../types/Todo"
import { EditTaskModal } from "../EditTaskModal"
import { NewTaskModal } from "../NewTaskModal"
import { TodoListFilter } from "../TodoListFilter"

export function TodoContainer() {
  const [allTodos, setAllTodos] = useState<Todo[]>([])
  const [isComplete, setIsComplete] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState<Todo>()

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(!showModal)
  }

  const closeEditModal = () => {
    setShowEditModal(false)
  }
  const editTask = (todoObject: Todo) => {
    setSelectedTodo(todoObject)
    setShowEditModal(true)
  }

  const markAsCompleted = (id: string) => {
    const updatedList = allTodos.map((item) => {
      if (item.id === id) {
        setIsComplete(!isComplete)
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
            todo={selectedTodo}
          />
        </div>
      </div>
      <div className="wrapper-completed">
        <div className="completed-todos">
          <h3 id="active-tasks">Completed Tasks</h3>
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
