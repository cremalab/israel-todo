import "./styles.css"

export function App() {
  return (
    <div className="App">
      <div id="header">
        <p id="header-title">Todo App</p>
      </div>

      <div className="active">
        <div className="content">
          <div className="checkbox">
            <span className="ellipse"></span>
          </div>
          <div className="text-date">
            <p className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              repudiand
            </p>
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
