import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { Todo } from "../../types/Todo"
import { Card } from "../Card"
import { Modal } from "../Modal"
import { TodoForm } from "../TodoForm"

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
  // variable called dispatch set to the hook
  const handleSaveTodo = () => {
    const newTodo: Todo = { id: uuidv4(), todo, isCompleted: false }
    if (todo && !allTodos.includes(newTodo)) {
      setAllTodos([...allTodos, newTodo])
      // instead of setAlltodos we would use dispatch which is a function that takes in our action
      // displatch(addTodo())
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
    <Modal open={showModal}>
      <Card>
        <TodoForm
          onChange={handleChangeEvent}
          title={"New Task"}
          onSave={handleSaveTodo}
          onCancel={closeModal}
        />
      </Card>
    </Modal>
  )
}
