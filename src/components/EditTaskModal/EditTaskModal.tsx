import { useState } from "react"
// import { v4 as uuidv4 } from "uuid"
import { Todo } from "../../types/Todo"
import { ModalContainer } from "../ModalContainer"

export interface Props {
  allTodos: Todo[]
  setAllTodos: (value: Todo[]) => void
  closeModal: () => void
  showEditModal: boolean
  setEditedText?: ({ id, todo, isCompleted }: Todo) => void
  todoText: string
}

export function EditTaskModal({
  // allTodos,
  // setAllTodos,
  todoText,
  setEditedText,
  showEditModal,
  closeModal,
}: Props) {
  const [todo, setTodo] = useState("")

  const handleSaveTodo = () => {
    console.log(todo)
    setEditedText?.({ id: "", todo: "", isCompleted: false })

    closeModal()
  }
  const handleChangeEvent = (value: string) => {
    setTodo(value)
  }
  const handleDeleteTodo = () => {
    console.log("Deleted")
  }

  return (
    <ModalContainer
      title={"Edit Task"}
      onClick={handleSaveTodo}
      onChange={handleChangeEvent}
      closeModal={closeModal}
      open={showEditModal}
      onDelete={handleDeleteTodo}
      todoText={todoText}
    />
  )
}
