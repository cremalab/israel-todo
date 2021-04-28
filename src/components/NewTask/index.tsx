import "./styles.scss"

export function NewTask() {
  return (
    <div className="new-task">
      <p>New Task</p>
      <input type="text" placeholder="Task description" />
      <div className="cta">
        <button className="secondary-small" id="cancel">
          Cancel
        </button>
        <button className="primary-small" id="save">
          Save
        </button>
      </div>
    </div>
  )
}
