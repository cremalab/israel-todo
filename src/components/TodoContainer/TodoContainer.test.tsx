import { fireEvent, render } from "@testing-library/react"
import { store } from "../../store"
import { setCurrentList } from "../../store/currentList"
import { addTodo } from "../../store/todos"
import { List } from "../../types/List"
import { Todo } from "../../types/Todo"
import { StateProvider } from "../StateProvider"
import { TodoContainer } from "."

describe("TodoContainer", () => {
  const newList: List = {
    id: "1123",
    name: "Things to do",
  }
  store.dispatch(setCurrentList(newList))
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
      listId: "1123",
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
  })
  test("It should hide completed todos", () => {
    const { getByTestId, getByText } = render(
      <StateProvider>
        <TodoContainer />
      </StateProvider>,
    )
    const todo = getByText("Add tests")
    const state = store.getState().todos
    const value = state.value.find(({ id }) => id === "123")

    expect(value?.isCompleted).toBe(true)

    const expandLess = getByTestId("expand-less")
    fireEvent.click(expandLess)

    expect(todo).not.toBeInTheDocument()
  })
})
