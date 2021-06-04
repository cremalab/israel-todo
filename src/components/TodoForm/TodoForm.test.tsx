import { fireEvent, render } from "@testing-library/react"
import { TodoForm } from "."

describe("Form", () => {
  test("Form", () => {
    const onClick = jest.fn()
    const onChange = jest.fn()
    const saveButton = jest.fn()
    const handleDelete = jest.fn()
    const { getByText, getByPlaceholderText } = render(
      <TodoForm
        onChange={onChange}
        onCancel={onClick}
        onSave={saveButton}
        onDelete={handleDelete}
        title={"New Task"}
      />,
    )
    fireEvent.change(getByPlaceholderText("Task description"), {
      target: { value: "Zoom Meeting" },
    })
    expect(onChange).toHaveBeenCalledWith("Zoom Meeting")

    const button = getByText("Cancel")
    const save = getByText("Save")
    fireEvent.click(button)
    expect(onClick).toBeCalled()

    fireEvent.click(save)
    expect(saveButton).toBeCalled()
  })
})
