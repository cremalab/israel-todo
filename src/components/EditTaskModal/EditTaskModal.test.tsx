import { fireEvent, render } from "@testing-library/react"
import { EditTaskModal } from "."

describe("Form", () => {
  test("Form", () => {
    const onClick = jest.fn()
    const saveButton = jest.fn()
    const allTodos = [{ id: "123", todo: "Zoom meeting", isCompleted: true }]
    // const handleDelete = jest.fn()
    const { getByText } = render(
      <EditTaskModal
        allTodos={allTodos}
        showEditModal={true}
        closeModal={onClick}
        setAllTodos={saveButton}
      />,
    )

    const button = getByText("Cancel")
    const save = getByText("Save")
    fireEvent.click(button)
    expect(onClick).toBeCalled()

    fireEvent.click(save)
    expect(saveButton).toBeCalled()
  })
})
