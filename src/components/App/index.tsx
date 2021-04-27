import "./styles.css"

export function App() {
  return (
    <div className="App">
      <div id="header">
        <p>Todo App</p>
      </div>

      <div className="wrapper">
        <div className="col">
          <div>
            <h3>Todos</h3>
            <ul>
              <li>
                <div className="todo">
                  <input type="checkbox" />
                  <label>buy milk</label>
                  <button>Save</button>
                  <button>Edit</button>
                </div>
              </li>
            </ul>
          </div>
          <div className="formSection">
            <label htmlFor="newTodo">Add New Todo:</label>
            <input type="text" name="newTodo" />
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}
