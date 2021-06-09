import { fireEvent, render } from "@testing-library/react"
import { NewListModal } from "./NewListModal"

describe("NewListModal", () => {
  it("captures a value when onChange", () => {
    const list = ["List Name"]
    const setListNames = jest.fn()
    const setShowListModal = jest.fn()

    const { getByPlaceholderText, getByText } = render(
      <NewListModal
        showListModal={true}
        listNames={list}
        setListNames={setListNames}
        setShowListModal={setShowListModal}
      />,
    )

    const input = getByPlaceholderText("List Name") as HTMLInputElement

    fireEvent.change(input, { target: { value: "My Tasks" } })

    const saveButton = getByText("Save")
    fireEvent.click(saveButton)

    expect(input.value).toBe("My Tasks")
  })
})
