// import { v4 as uuidv4 } from "uuid"
import { useEffect, useState } from "react"
import { Todo } from "../../types/Todo"
import { Modal } from "../Modal/Modal"
import { ModalContainer } from "../ModalContainer"

export interface Props {
  allTodos: Todo[]
  setAllTodos: (value: Todo[]) => void
  closeModal: () => void
  showEditModal: boolean
  setEditedText?: ({ id, todo, isCompleted }: Todo) => void
  todo?: Todo
  showConfirmModal: () => void
  closeConfirmModal: () => void
  openConfirmModal: boolean
}

export function EditTaskModal({
  allTodos,
  setAllTodos,
  todo,
  showEditModal,
  closeModal,
  showConfirmModal,
  closeConfirmModal,
  openConfirmModal,
}: Props) {
  useEffect(() => {
    setUpdatedTodo(todo)
  }, [todo])

  const [updatedTodo, setUpdatedTodo] = useState(todo)

  const handleSaveTodo = () => {
    const updatedTodos = allTodos.map((item) => {
      if (item.id === todo?.id) {
        return { ...item, ...updatedTodo }
      }
      return item
    })

    setAllTodos(updatedTodos)

    closeModal()
  }

  const handleChangeEvent = (value: string) => {
    if (todo) {
      const updateTodo: Todo = { ...todo, todo: value }
      setUpdatedTodo(updateTodo)
    }
  }
  const handleDeleteTodo = () => {
    const updatedTodos = allTodos.filter((item) => item.id !== todo?.id)
    setAllTodos(updatedTodos)
    closeConfirmModal()
    closeModal()
  }

  return (
    <>
      <ModalContainer
        title={"Edit Task"}
        onSave={handleSaveTodo}
        onChange={handleChangeEvent}
        closeModal={closeModal}
        open={showEditModal}
        showConfirmModal={showConfirmModal}
        todoText={updatedTodo?.todo}
        onDelete={handleDeleteTodo}
      />
      <Modal
        title={"Confirm you would like to delete task."}
        openConfirmModal={openConfirmModal}
        closeModal={closeConfirmModal}
        handleDelete={handleDeleteTodo}
      />
    </>
  )
}
