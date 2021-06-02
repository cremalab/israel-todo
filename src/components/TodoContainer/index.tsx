import "./styles.scss"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import { useState } from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { toggleTodo } from "../../store/todos"
import { Todo } from "../../types/Todo"
import { EditTaskModal } from "../EditTaskModal"
import { NewTaskModal } from "../NewTaskModal"
import { PrimarySmallButton } from "../PrimarySmallButton"
import { TodoListFilter } from "../TodoListFilter"

export function TodoContainer() {
  const todos = useAppSelector((state) => state.todos)

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
          {todos.value.length > 0 ? (
            <h3 className="titles">Active Tasks</h3>
          ) : (
            <div className="empty-state-container">
              <h3 className="initial-state">
                Create a task with the button below.
              </h3>
              <div className="empty-state">
                <CheckCircleIcon className="empty-state-checkbox" />
                <div>
                  <div className="empty-state-placeholder"></div>
                  <div className="empty-state-placeholder short"></div>
                </div>
              </div>
            </div>
          )}

          <TodoListFilter
            markAsCompleted={markAsCompleted}
            editTask={editTask}
          />
          {todos.value.length > 0 ? (
            <button className="new-task-btn" onClick={openModal}>
              <span id="btn-text">Create New Task</span>
            </button>
          ) : (
            <div className="empty-state-btn-container">
              <PrimarySmallButton name="Create New Task" onClick={openModal} />
            </div>
          )}
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
          {todos.value.length > 0 ? (
            <h3 className="titles">Completed Tasks</h3>
          ) : null}
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
