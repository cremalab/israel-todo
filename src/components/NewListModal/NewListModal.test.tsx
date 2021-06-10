import { fireEvent, render } from "@testing-library/react"
import { StateProvider } from "../StateProvider"
import { NewListModal } from "./NewListModal"

describe("NewListModal", () => {
  it("captures a value when onChange", () => {
    const setShowListModal = jest.fn()

    const { getByPlaceholderText, getByText } = render(
      <StateProvider>
        <NewListModal
          showListModal={true}
          setShowListModal={setShowListModal}
        />
        ,
      </StateProvider>,
    )

    const input = getByPlaceholderText("List Name") as HTMLInputElement

    fireEvent.change(input, { target: { value: "My Tasks" } })

    const saveButton = getByText("Save")
    fireEvent.click(saveButton)

    expect(input.value).toBe("My Tasks")
  })
})
