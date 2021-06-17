import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { addTodo } from "../../store/todos"
import { Todo } from "../../types/Todo"
import { Card } from "../Card"
import { Modal } from "../Modal"
import { TodoForm } from "../TodoForm"

export interface Props {
  closeModal: () => void
  showModal: boolean
}

export function NewTaskModal({ showModal, closeModal }: Props) {
  const currentList = useAppSelector((state) => state.currentList)
  const dispatch = useAppDispatch()
  const [todo, setTodo] = useState("")
  const handleSaveTodo = () => {
    const newTodo: Todo = {
      id: uuidv4(),
      todo,
      isCompleted: false,
      listId: currentList.value[0].id,
    }
    if (todo) {
      dispatch(addTodo(newTodo))
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
          placeholder={"Task description"}
          onChange={handleChangeEvent}
          title={"New Task"}
          onSave={handleSaveTodo}
          onCancel={closeModal}
        />
      </Card>
    </Modal>
  )
}
