import Popover from "@material-ui/core/Popover"
import Typography from "@material-ui/core/Typography"
import { Theme, makeStyles } from "@material-ui/core/styles"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { useState } from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import "./styles.scss"
import { setCurrentList } from "../../store/currentList"
import { deleteList } from "../../store/list"
import { List } from "../../types/List"
import { EditListModal } from "../EditListModal"

interface Props {
  showSideNav: boolean
  openListModal: () => void
}

export function SideNav({ showSideNav, openListModal }: Props) {
  const dispatch = useAppDispatch()
  const classes = useStyles()
  const listNames = useAppSelector((state) => state.lists)
  const [showEditListModal, setshowEditListModal] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [popoverSelectedList, setPopoverSelectedList] = useState("")
  const currentList = useAppSelector((state) => state.currentList)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const open = Boolean(anchorEl)
  const handleClose = () => {
    setAnchorEl(null)
  }
  const setCurrentPopover = (id: string) => {
    setPopoverSelectedList(id)
  }
  const setCurrentListInfo = ({ id, name }: List) => {
    dispatch(setCurrentList({ id, name }))
    setCurrentPopover(id)
  }
  const openEditModal = () => {
    setAnchorEl(null)
    setshowEditListModal(true)
  }
  const closeEditModal = () => {
    setAnchorEl(null)
    setshowEditListModal(false)
  }

  const deleteListName = (id: string) => {
    dispatch(deleteList(id))
    dispatch(setCurrentList(listNames.value[0]))
  }

  return (
    <>
      {showSideNav ? (
        <div className="side-nav">
          <div className="task-list-container">
            <div className="list-div">
              <h1 className="list-title">Lists</h1>
              {listNames.value.map((taskList: List) => {
                return (
                  <div
                    className={
                      taskList.id === currentList.value[0].id
                        ? "new-list selected-list list-title"
                        : "new-list"
                    }
                    key={taskList.id}
                    onClick={() => {
                      setCurrentListInfo(taskList)
                    }}
                  >
                    {taskList.name}

                    <button
                      className={
                        taskList.name === currentList.value[0].name
                          ? "selected-button "
                          : "wrapper-button"
                      }
                      onClick={handleClick}
                    >
                      <MoreVertIcon data-testid="dot-button" />
                    </button>
                    <Popover
                      id={popoverSelectedList}
                      anchorEl={anchorEl}
                      open={open}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      onClick={(event) => event.stopPropagation()}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      onClose={handleClose}
                      PaperProps={{ className: classes.popover }}
                    >
                      <Typography
                        className={classes.typography}
                        onClick={(e) => {
                          openEditModal()
                          e.stopPropagation()
                        }}
                      >
                        Edit List Name
                      </Typography>
                      <Typography
                        className={classes.typography}
                        onClick={(e) => {
                          deleteListName(currentList.value[0].id)
                          closeEditModal()
                          e.stopPropagation()
                        }}
                      >
                        Delete List
                      </Typography>
                    </Popover>
                  </div>
                )
              })}
            </div>

            <button className="new-list" onClick={openListModal}>
              + Create New List
            </button>
          </div>
        </div>
      ) : null}
      <EditListModal
        showEditListModal={showEditListModal}
        setShowEditListModal={setshowEditListModal}
      />
    </>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  popover: {
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
    width: "232px",
    height: "96px",
    background: "#FFFFFF",
    borderRadius: "8px",
  },
  typography: {
    padding: theme.spacing(1),
  },
}))
