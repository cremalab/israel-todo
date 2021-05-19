import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { Todo } from "../../types/Todo"
import { ModalContainer } from "../ModalContainer"

export interface Props {
  allTodos: Todo[]
  setAllTodos: (value: Todo[]) => void
  closeModal: () => void
  showModal: boolean
}

export function NewTaskModal({
  allTodos,
  setAllTodos,
  showModal,
  closeModal,
}: Props) {
  const [todo, setTodo] = useState("")

  const handleSaveTodo = () => {
    const newTodo: Todo = { id: uuidv4(), todo, isCompleted: false }
    if (todo && !allTodos.includes(newTodo)) {
      setAllTodos([...allTodos, newTodo])
      closeModal()
      setTodo("")
    } else {
      alert("You must Enter todo to save!")
    }
  }
  const handleChangeEvent = (value: string) => {
    setTodo(value)
  }

  return (
    <ModalContainer
      title={"New Task"}
      onSave={handleSaveTodo}
      onChange={handleChangeEvent}
      closeModal={closeModal}
      open={showModal}
    />
  )
}
