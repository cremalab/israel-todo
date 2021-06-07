import "./styles.scss"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked"

export interface Props {
  todo: string
  isCompleted?: boolean
  handleIconClick: () => void
  clicked: boolean
  edit: () => void
}

export function TodoCard(props: Props) {
  const completedClass = props.isCompleted ? " text completed-text" : "text"
  return (
    <div className="todo-card" onClick={props.edit}>
      <div className="card-content">
        <div
          className="ellipse-div"
          onClick={(event) => {
            props.handleIconClick()
            event.stopPropagation()
          }}
          data-testid="complete-button"
        >
          {props.clicked ? (
            <CheckCircleIcon className="ellipse" />
          ) : (
            <RadioButtonUncheckedIcon className="ellipse" />
          )}
        </div>
        <div className="text-date-section">
          <p className={completedClass}>{props.todo}</p>
        </div>
      </div>
    </div>
  )
}
