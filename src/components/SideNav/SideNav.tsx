import MoreVertIcon from "@material-ui/icons/MoreVert"
import { useState } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { Card } from "../Card"
import "./styles.scss"

interface Props {
  showSideNav: boolean
  openListModal: () => void
}

export function SideNav({ showSideNav, openListModal }: Props) {
  const listNames = useAppSelector((state) => state.lists)
  const [showModifyCard, setshowModifyCard] = useState(false)
  const openModifyCard = () => {
    setshowModifyCard(true)
  }
  return (
    <>
      {showSideNav ? (
        <div className="side-nav">
          <div className="task-list-container">
            <ul>
              <h1 id="list-title">Lists</h1>
              {listNames.value.map((taskList) => {
                return (
                  <li
                    className="new-list"
                    onClick={() => console.log(taskList.name, taskList.id)}
                    key={taskList.id}
                  >
                    {taskList.name}
                    <MoreVertIcon
                      data-testid="dot-button"
                      onClick={(event) => {
                        event.stopPropagation()
                        openModifyCard()
                      }}
                    />
                  </li>
                )
              })}
              {showModifyCard ? (
                <Card>
                  <p>Edit List Name</p>
                  <p>Delete List Name</p>
                </Card>
              ) : null}
            </ul>
            <button className="new-list" onClick={openListModal}>
              + Create New List
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
