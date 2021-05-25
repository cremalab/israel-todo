import { fireEvent, render } from "@testing-library/react"
import { NewTaskModal } from "."

describe("New Task Modal", () => {
  test("Modal", () => {
    const onClick = jest.fn()

    const { getByText } = render(
      <NewTaskModal closeModal={onClick} showModal={true} />,
    )

    const button = getByText("Cancel")

    fireEvent.click(button)
    expect(onClick).toBeCalled()
  })
})
