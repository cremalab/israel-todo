import { render } from "@testing-library/react"
import { TodoCard } from "."

describe("TodoCard", () => {
  test("it renders a todo", () => {
    const todoText = "Create testing for components"
    const { getByText } = render(<TodoCard todo={todoText} />)
    const element = getByText(todoText)
    expect(element).toBeInTheDocument()
  })
  test("completed todo is striked", () => {
    const todoText = "Create testing for components"
    const { getByText } = render(
      <TodoCard todo={todoText} isCompleted={true} />,
    )
    const element = getByText(todoText)
    expect(element).toHaveClass("striked-text")
  })
})
