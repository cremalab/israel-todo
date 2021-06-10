import { useEffect, useState } from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { editList } from "../../store/list"
import { List } from "../../types/List"
import { Card } from "../Card"
import { Modal } from "../Modal"
import { TodoForm } from "../TodoForm"

interface Props {
  setShowEditListModal: (value: boolean) => void
  showEditListModal: boolean
  list?: List
}

export function EditListModal({
  showEditListModal,
  setShowEditListModal,
  list,
}: Props) {
  const [updatedList, setUpdatedList] = useState(list)
  useEffect(() => {
    setUpdatedList(list)
  }, [list])
  const dispatch = useAppDispatch()

  const closeListModal = () => {
    setShowEditListModal(false)
  }

  const handleChangeEvent = (value: string) => {
    if (list) {
      const updateList: List = { ...list, name: value }
      setUpdatedList(updateList)
    }
  }
  const handleSaveListName = () => {
    updatedList && dispatch(editList(updatedList))
    closeListModal()
  }

  return (
    <Modal open={showEditListModal}>
      <Card>
        <TodoForm
          placeholder={"List Name"}
          title={"Edit List Name"}
          onCancel={closeListModal}
          onChange={handleChangeEvent}
          onSave={handleSaveListName}
          text={updatedList?.name}
        />
      </Card>
    </Modal>
  )
}
