import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { addList } from "../../store/list"
import { List } from "../../types/List"
import { Card } from "../Card"
import { Modal } from "../Modal"
import { TodoForm } from "../TodoForm"

interface Props {
  setShowListModal: (value: boolean) => void
  showListModal: boolean
}

export function NewListModal({ showListModal, setShowListModal }: Props) {
  const [listName, setListName] = useState("")
  const dispatch = useAppDispatch()

  const closeListModal = () => {
    setShowListModal(false)
  }

  const handleChangeEvent = (value: string) => {
    setListName(value)
  }
  const handleSaveListName = () => {
    const newListName: List = {
      id: uuidv4(),
      name: listName,
    }
    dispatch(addList(newListName))
    closeListModal()
  }

  return (
    <Modal open={showListModal}>
      <Card>
        <TodoForm
          placeholder={"List Name"}
          title={"New List"}
          onCancel={closeListModal}
          onChange={handleChangeEvent}
          onSave={handleSaveListName}
        />
      </Card>
    </Modal>
  )
}
