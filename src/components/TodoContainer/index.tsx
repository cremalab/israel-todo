import "./styles.scss"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { useState } from "react"
import { ReactComponent as EmptyState } from "../../assets/svg/Card.svg"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { toggleTodo } from "../../store/todos"
import { Todo } from "../../types/Todo"
import { EditTaskModal } from "../EditTaskModal"
import { Header } from "../Header"
import { NewListModal } from "../NewListModal"
import { NewTaskModal } from "../NewTaskModal"
import { PrimarySmallButton } from "../PrimarySmallButton"
import { SideNav } from "../SideNav"
import { TodoListFilter } from "../TodoListFilter"

export function TodoContainer() {
  const todos = useAppSelector((state) => state.todos)

  const dispatch = useAppDispatch()
  const [showModal, setShowModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState<Todo>()
  const [showCompleted, setShowCompleted] = useState(true)
  const [showSideNav, setShowSideNav] = useState(false)
  const [showListModal, setShowListModal] = useState(false)
  // const currentlList = useAppSelector((state) => state.currentList)

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav)
  }

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

  const toggleCompletedSection = () => {
    setShowCompleted(!showCompleted)
  }
  const openListModal = () => {
    setShowListModal(true)
  }

  return (
    <>
      <div className="app">
        <Header toggleSideNav={toggleSideNav} />
        <SideNav showSideNav={showSideNav} openListModal={openListModal} />

        <div className="wrapper">
          <div className="todos">
            {todos.value.length > 0 ? (
              <h3 className="titles">Active Tasks</h3>
            ) : (
              <div className="empty-state-container">
                <h3 className="initial-state">
                  Create a task with the button below.
                </h3>
                <EmptyState />
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
                <PrimarySmallButton
                  name="Create New Task"
                  onClick={openModal}
                />
              </div>
            )}
            <NewTaskModal closeModal={closeModal} showModal={showModal} />
            <EditTaskModal
              closeModal={closeEditModal}
              showEditModal={showEditModal}
              todo={selectedTodo}
              showModal={showEditModal}
            />
            <NewListModal
              setShowListModal={setShowListModal}
              showListModal={showListModal}
            />
          </div>
        </div>
        <div className="wrapper-completed">
          {todos.value.length > 0 ? (
            <div id="completed-todos-title">
              <h3 className="titles">Completed Tasks</h3>
              {showCompleted ? (
                <div id="expand-section">
                  <p className="titles">Less</p>
                  <ExpandLessIcon
                    onClick={toggleCompletedSection}
                    data-testid="expand-less"
                  />
                </div>
              ) : (
                <div id="expand-section">
                  <p className="titles">Show</p>
                  <ExpandMoreIcon onClick={toggleCompletedSection} />
                </div>
              )}
            </div>
          ) : null}
          {showCompleted ? (
            <div className="completed-todos">
              <TodoListFilter
                isCompleted
                markAsCompleted={markAsCompleted}
                editTask={editTask}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}
