import { fireEvent, render } from "@testing-library/react"
import { store } from "../../store"
import { addTodo } from "../../store/todos"
import { Todo } from "../../types/Todo"
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
  test("It should toggle a todo", () => {
    const newTodo: Todo = {
      id: "123",
      todo: "Add tests",
      isCompleted: false,
    }
    store.dispatch(addTodo(newTodo))

    const { getByTestId } = render(
      <StateProvider>
        <TodoContainer />
      </StateProvider>,
    )
    const completeButton = getByTestId("complete-button")

    fireEvent.click(completeButton)
    const state = store.getState().todos
    const value = state.value.find(({ id }) => id === "123")

    expect(value?.isCompleted).toBe(true)
    console.log(state.value)
  })
})
