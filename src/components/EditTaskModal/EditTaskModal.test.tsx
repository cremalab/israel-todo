import { render } from "@testing-library/react"
import { EditTaskModal } from "."

describe("Form", () => {
  test("Form", () => {
    const onClick = jest.fn()
    const saveButton = jest.fn()
    const allTodos = [{ id: "123", todo: "Zoom meeting", isCompleted: true }]
    // const handleDelete = jest.fn()
    render(
      <EditTaskModal
        allTodos={allTodos}
        showEditModal={true}
        closeModal={onClick}
        setAllTodos={saveButton}
        showModal={false}
      />,
    )
    expect(EditTaskModal).toBeDefined()
  })
})
