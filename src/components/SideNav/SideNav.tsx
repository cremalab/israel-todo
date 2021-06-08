import "./styles.scss"

interface Props {
  showSideNav: boolean
  openListModal: () => void
  listNames: string[]
}

export function SideNav({ showSideNav, openListModal, listNames }: Props) {
  return (
    <>
      {showSideNav ? (
        <div className="side-nav">
          <div className="task-list-container">
            <ul>
              <h1 id="list-title">Lists</h1>
              {listNames.map((taskList) => {
                return (
                  <li
                    className="new-list"
                    onClick={() => console.log(taskList)}
                    key={Math.random()}
                  >
                    {taskList}
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
