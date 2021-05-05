import { render } from "@testing-library/react"
import { TodoListFilter } from "./TodoListFilter"

describe("TodoListFilter", () => {
  test("isCompleted set to false should show up on document", () => {
    const markAsCompleted = jest.fn()
    const todoText = "something"
    const allTodos = [{ id: "123", todo: "something", isCompleted: false }]
    const { getByText } = render(
      <TodoListFilter
        markAsCompleted={markAsCompleted}
        isCompleted={false}
        allTodos={allTodos}
      />,
    )
    const element = getByText(todoText)
    expect(element).toBeInTheDocument()
  })
  test("completed todo is striked", () => {
    const markAsCompleted = jest.fn()
    const todoText = "something"
    const allTodos = [{ id: "123", todo: "something", isCompleted: true }]
    const { getByText } = render(
      <TodoListFilter
        markAsCompleted={markAsCompleted}
        isCompleted={true}
        allTodos={allTodos}
      />,
    )
    const element = getByText(todoText)
    expect(element).toHaveClass("striked-text")
  })
})
