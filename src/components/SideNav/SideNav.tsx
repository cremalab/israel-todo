import Popover from "@material-ui/core/Popover"
import Typography from "@material-ui/core/Typography"
import { Theme, makeStyles } from "@material-ui/core/styles"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { useState } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import "./styles.scss"
import { List } from "../../types/List"
import { EditListModal } from "../EditListModal"

interface Props {
  showSideNav: boolean
  openListModal: () => void
}

export function SideNav({ showSideNav, openListModal }: Props) {
  const classes = useStyles()
  const listNames = useAppSelector((state) => state.lists)
  const [showEditListModal, setshowEditListModal] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [popoverSelectedList, setPopoverSelectedList] = useState("")
  const [currentList, setCurrentList] = useState<List>(listNames.value[0])

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
    setCurrentList({ id, name })
    setCurrentPopover(id)
  }
  const openEditModal = () => {
    setAnchorEl(null)
    setshowEditListModal(true)
  }
  console.log(currentList?.name)
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
                      taskList.id === currentList?.id
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
                        taskList.name === currentList?.name
                          ? "selected-button "
                          : "wrapper-button"
                      }
                      onClick={handleClick}
                    >
                      <MoreVertIcon data-testid="dot-button" />
                    </button>
                    <Popover
                      // className={classes.popover}
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
                        onClick={openEditModal}
                      >
                        Edit List Name
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
        list={currentList}
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
