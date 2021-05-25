import { render } from "@testing-library/react"
import { TodoCard } from "."

describe("TodoCard", () => {
  test("it renders a todo", () => {
    const handleIcon = jest.fn()
    const todoText = "Create testing for components"
    const handleEdit = jest.fn()
    const { getByText } = render(
      <TodoCard
        todo={todoText}
        clicked={false}
        handleIconClick={handleIcon}
        edit={handleEdit}
      />,
    )
    const element = getByText(todoText)
    expect(element).toBeInTheDocument()
  })
  test("completed todo is completed", () => {
    const handleIcon = jest.fn()
    const todoText = "Create testing for components"
    const handleEdit = jest.fn()
    const { getByText } = render(
      <TodoCard
        todo={todoText}
        isCompleted={true}
        clicked={true}
        handleIconClick={handleIcon}
        edit={handleEdit}
      />,
    )
    const element = getByText(todoText)
    expect(element).toHaveClass("completed-text")
  })
})
