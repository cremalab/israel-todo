import { fireEvent, render } from "@testing-library/react"
import { TodoContainer } from "."

describe("TodoContainer", () => {
  test("renders TodoContainer component", () => {
    const onClick = jest.fn()
    const { getByText } = render(<TodoContainer />)
    const button = getByText("Create New Task")
    fireEvent.click(button)
    expect(onClick).toBeDefined()
  })
})
