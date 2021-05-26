import { useEffect, useState } from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { deleteTodo, editTodo } from "../../store/todos"
import { Todo } from "../../types/Todo"
import { Card } from "../Card"
import { Modal } from "../Modal"
import { PrimarySmallButton } from "../PrimarySmallButton"
import { SecondarySmallButton } from "../SecondarySmallButton"
import { TodoForm } from "../TodoForm"

export interface Props {
  closeModal: () => void
  showEditModal: boolean
  setEditedText?: ({ id, todo, isCompleted }: Todo) => void
  todo?: Todo
  showModal: boolean
}

export function EditTaskModal({ todo, closeModal, showModal }: Props) {
  useEffect(() => {
    setUpdatedTodo(todo)
  }, [todo])
  const dispatch = useAppDispatch()
  const [updatedTodo, setUpdatedTodo] = useState(todo)
  const [openConfirmModal, setOpenConfirmModal] = useState(false)

  const closeConfirmModal = () => {
    setOpenConfirmModal(false)
  }
  const openConfirm = () => {
    setOpenConfirmModal(true)
  }
  const handleSaveTodo = () => {
    updatedTodo && dispatch(editTodo(updatedTodo))
    closeModal()
  }

  const handleChangeEvent = (value: string) => {
    if (todo) {
      const updateTodo: Todo = { ...todo, todo: value }
      setUpdatedTodo(updateTodo)
    }
  }
  const handleDeleteTodo = () => {
    todo?.id && dispatch(deleteTodo(todo?.id))
    closeConfirmModal()
    closeModal()
  }

  const closeModals = () => {
    closeConfirmModal()
    closeModal()
  }

  return (
    <>
      <Modal open={showModal}>
        <Card>
          <TodoForm
            onChange={handleChangeEvent}
            title={"Edit Task"}
            onSave={handleSaveTodo}
            onCancel={closeModal}
            onDelete={openConfirm}
            todoText={updatedTodo?.todo}
          ></TodoForm>
        </Card>
      </Modal>
      <Modal open={openConfirmModal}>
        <Card>
          <div className="row">
            <h5>Please confirm you would like to delete the todo.</h5>
          </div>
          <div className="btn-div">
            <SecondarySmallButton name="Cancel" onCancel={closeModals} />
            <PrimarySmallButton
              name="Confirm"
              onClick={() => handleDeleteTodo()}
            />
          </div>
        </Card>
      </Modal>
    </>
  )
}
