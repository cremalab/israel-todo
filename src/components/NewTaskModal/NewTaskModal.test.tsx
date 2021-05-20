import { fireEvent, render } from "@testing-library/react"
import { NewTaskModal } from "."

describe("New Task Modal", () => {
  test("Modal", () => {
    const onClick = jest.fn()

    const allTodos = [{ id: "123", todo: "Zoom meeting", isCompleted: true }]

    const handleSetTodos = jest.fn()
    const { getByText } = render(
      <NewTaskModal
        closeModal={onClick}
        allTodos={allTodos}
        showModal={true}
        setAllTodos={handleSetTodos}
      />,
    )

    const button = getByText("Cancel")

    fireEvent.click(button)
    expect(onClick).toBeCalled()
  })
})
