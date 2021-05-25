import "./styles.scss"
import { useState } from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { toggleTodo } from "../../store/todos"
import { Todo } from "../../types/Todo"
import { EditTaskModal } from "../EditTaskModal"
import { NewTaskModal } from "../NewTaskModal"
import { TodoListFilter } from "../TodoListFilter"

export function TodoContainer() {
  const todos = useAppSelector((state) => state.todos)
  console.log(todos)
  const dispatch = useAppDispatch()
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
    dispatch(toggleTodo(id))
  }

  return (
    <>
      <div className="wrapper">
        <div className="todos">
          <h3 id="active-tasks">Active Tasks</h3>

          <TodoListFilter
            markAsCompleted={markAsCompleted}
            editTask={editTask}
          />

          <button className="new-task-btn" onClick={openModal}>
            <span id="btn-text">Create New Task</span>
          </button>
          <NewTaskModal closeModal={closeModal} showModal={showModal} />
          <EditTaskModal
            closeModal={closeEditModal}
            showEditModal={showEditModal}
            todo={selectedTodo}
            showModal={showEditModal}
          />
        </div>
      </div>
      <div className="wrapper-completed">
        <div className="completed-todos">
          <h3 id="active-tasks">Completed Tasks</h3>
          <TodoListFilter
            isCompleted
            markAsCompleted={markAsCompleted}
            editTask={editTask}
          />
        </div>
      </div>
    </>
  )
}
