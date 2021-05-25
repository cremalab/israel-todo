import { render } from "@testing-library/react"
import { StateProvider } from "../StateProvider"
import { TodoListFilter } from "./TodoListFilter"

describe("TodoListFilter", () => {
  test("isCompleted set to false should show up on document", () => {
    const markAsCompleted = jest.fn()
    const handleEditTask = jest.fn()
    render(
      <StateProvider>
        <TodoListFilter
          markAsCompleted={markAsCompleted}
          isCompleted={false}
          editTask={handleEditTask}
        />
      </StateProvider>,
    )
  })
  test("completed todo is striked", () => {
    const markAsCompleted = jest.fn()

    const handleEditTask = jest.fn()
    render(
      <StateProvider>
        <TodoListFilter
          markAsCompleted={markAsCompleted}
          isCompleted={true}
          editTask={handleEditTask}
        />
      </StateProvider>,
    )
  })
  test("isCompleted set to true should also show up on document", () => {
    const markAsCompleted = jest.fn()

    const handleEditTask = jest.fn()

    render(
      <StateProvider>
        <TodoListFilter
          markAsCompleted={markAsCompleted}
          isCompleted={true}
          editTask={handleEditTask}
        />
      </StateProvider>,
    )
  })
})
