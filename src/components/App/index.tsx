import "./styles.css"

export function App() {
  return (
    <div className="App">
      <div id="header">
        <p>Todo App</p>
      </div>

      <div className="active">
        <div className="checkbox">
          <div className="ellipse"></div>
        </div>
        <div className="content">
          <div className="text-date">
            <p className="text">Get milk</p>
          </div>
        </div>
      </div>

      <h3 id="active-tasks">Active Tasks</h3>

      <button className="large">
        <p id="btn-text">Create New Task</p>
      </button>
    </div>
  )
}
