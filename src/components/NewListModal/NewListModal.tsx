import { useState } from "react"
import { Card } from "../Card"
import { Modal } from "../Modal"
import { TodoForm } from "../TodoForm"

interface Props {
  setShowListModal: (value: boolean) => void
  showListModal: boolean
}

export function NewListModal({ showListModal, setShowListModal }: Props) {
  const [listName, setListName] = useState("")

  const closeListModal = () => {
    setShowListModal(false)
  }

  const handleChangeEvent = (value: string) => {
    setListName(value)
  }
  const handleSaveListName = () => {
    console.log(listName)
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
