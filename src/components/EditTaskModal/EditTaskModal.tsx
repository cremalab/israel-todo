// import { v4 as uuidv4 } from "uuid"
import { useEffect, useState } from "react"
import { Todo } from "../../types/Todo"
import { Modal } from "../Modal"
import { ModalContainer } from "../ModalContainer"

export interface Props {
  allTodos: Todo[]
  setAllTodos: (value: Todo[]) => void
  closeModal: () => void
  showEditModal: boolean
  setEditedText?: ({ id, todo, isCompleted }: Todo) => void
  todo?: Todo
}

export function EditTaskModal({
  allTodos,
  setAllTodos,
  todo,
  showEditModal,
  closeModal,
}: Props) {
  useEffect(() => {
    setUpdatedTodo(todo)
  }, [todo])

  const [updatedTodo, setUpdatedTodo] = useState(todo)
  const [openConfirmModal, setOpenConfirmModal] = useState(false)

  const closeConfirmModal = () => {
    setOpenConfirmModal(false)
  }
  const openConfirm = () => {
    setOpenConfirmModal(true)
  }
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
        todoText={updatedTodo?.todo}
        onDelete={openConfirm}
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
