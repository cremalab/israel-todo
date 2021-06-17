import { render } from "@testing-library/react"
import { store } from "../../store"
import { setCurrentList } from "../../store/currentList"
import { addTodo, toggleTodo } from "../../store/todos"
import { List } from "../../types/List"
import { Todo } from "../../types/Todo"
import { StateProvider } from "../StateProvider"
import { TodoListFilter } from "./TodoListFilter"

describe("TodoListFilter", () => {
  const newList: List = {
    id: "1234",
    name: "Things to do",
  }
  store.dispatch(setCurrentList(newList))
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
  test("completed todo is faded", () => {
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
  test("isCompleted set to true ", () => {
    const markAsCompleted = jest.fn()
    const handleEditTask = jest.fn()
    const newTodo: Todo = {
      id: "123",
      todo: "Add tests",
      isCompleted: false,
      listId: "112",
    }
    store.dispatch(addTodo(newTodo))
    store.dispatch(toggleTodo(newTodo.id))
    const state = store.getState().todos

    render(
      <StateProvider>
        <TodoListFilter
          markAsCompleted={markAsCompleted}
          isCompleted={true}
          editTask={handleEditTask}
        />
      </StateProvider>,
    )
    expect(state.value[0].isCompleted).toBe(true)
  })
})
