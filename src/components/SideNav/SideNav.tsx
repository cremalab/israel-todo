import "./styles.scss"

interface Props {
  showSideNav: boolean
  openListModal: () => void
}

export function SideNav({ showSideNav, openListModal }: Props) {
  const mockedTasks = ["My tasks", "Things to do", "Things to do at work"]

  return (
    <>
      {showSideNav ? (
        <div className="side-nav">
          <div className="task-list-container">
            <h1 id="list-title">Lists</h1>
            {mockedTasks.map((taskList) => {
              return <p>{taskList}</p>
            })}
            <button id="new-list" onClick={openListModal}>
              + Create New List
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
