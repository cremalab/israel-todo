import Popover from "@material-ui/core/Popover"
import Typography from "@material-ui/core/Typography"
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { useState } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import "./styles.scss"

interface Props {
  showSideNav: boolean
  openListModal: () => void
}

export function SideNav({ showSideNav, openListModal }: Props) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      typography: {
        padding: theme.spacing(1),
      },
    }),
  )
  const classes = useStyles()
  const listNames = useAppSelector((state) => state.lists)
  // const [showModifyCard, setshowModifyCard] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [currentSelectedList, setCurrentSelectedList] = useState("")

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const open = Boolean(anchorEl)
  const handleClose = () => {
    setAnchorEl(null)
  }
  const setCurrentList = (id: string) => {
    setCurrentSelectedList(id)
  }
  console.log(currentSelectedList)
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
                    key={taskList.id}
                    onClick={() => setCurrentList(taskList.id)}
                  >
                    {taskList.name}

                    <button id="wrapper-button" onClick={handleClick}>
                      <MoreVertIcon data-testid="dot-button" />
                    </button>
                    <Popover
                      anchorEl={anchorEl}
                      open={open}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      onClose={handleClose}
                      onClick={(event) => {
                        event.stopPropagation()
                        console.log(taskList.id)
                      }}
                    >
                      <Typography className={classes.typography}>
                        Rename List
                      </Typography>
                    </Popover>
                  </li>
                )
              })}
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
