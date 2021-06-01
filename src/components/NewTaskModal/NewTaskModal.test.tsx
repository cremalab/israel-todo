import { fireEvent, render } from "@testing-library/react"
import { store } from "../../store"
import { StateProvider } from "../StateProvider"
import { NewTaskModal } from "."

describe("New Task Modal", () => {
  test("Clicking save creates new todo", () => {
    const onClick = jest.fn()

    const { getByPlaceholderText, getByText } = render(
      <StateProvider>
        <NewTaskModal closeModal={onClick} showModal={true} />,
      </StateProvider>,
    )

    const input = getByPlaceholderText("Task description") as HTMLInputElement

    fireEvent.change(input, { target: { value: "Zoom Meeting" } })

    const saveButton = getByText("Save")
    fireEvent.click(saveButton)
    const state = store.getState().todos

    expect(state.value[0].todo).toBe("Zoom Meeting")
  })
})
