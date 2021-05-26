import { fireEvent, render } from "@testing-library/react"
import { StateProvider } from "../StateProvider"
import { TodoContainer } from "."

describe("TodoContainer", () => {
  test("renders TodoContainer component", () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <StateProvider>
        <TodoContainer />
      </StateProvider>,
    )
    const button = getByText("Create New Task")

    fireEvent.click(button)
    expect(onClick).toBeDefined()
  })
})
