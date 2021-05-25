import { fireEvent, render } from "@testing-library/react"
import { StateProvider } from "../StateProvider"
import { NewTaskModal } from "."

describe("New Task Modal", () => {
  test("Modal", () => {
    const onClick = jest.fn()

    const { getByText } = render(
      <StateProvider>
        <NewTaskModal closeModal={onClick} showModal={true} />,
      </StateProvider>,
    )

    const button = getByText("Cancel")

    fireEvent.click(button)
    expect(onClick).toBeCalled()
  })
})
