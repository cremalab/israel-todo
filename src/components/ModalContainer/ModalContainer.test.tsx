import { fireEvent, render } from "@testing-library/react"
import { ModalContainer } from "."

describe("Form", () => {
  test("Form", () => {
    const onClick = jest.fn()
    const onChange = jest.fn()
    const saveButton = jest.fn()

    const { getByText, getByPlaceholderText } = render(
      <ModalContainer
        onChange={onChange}
        closeModal={onClick}
        open={true}
        onClick={saveButton}
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
