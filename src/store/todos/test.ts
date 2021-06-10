import { Todo } from "../../types/Todo"
import { store } from "../index"
import todosReducer, { addTodo, deleteTodo, editTodo, toggleTodo } from "."

describe("todos reducer", () => {
  it("Should add a todo", () => {
    const newTodo: Todo = {
      id: "123",
      todo: "Add tests",
      isCompleted: false,
    }
    const state = todosReducer(undefined, addTodo(newTodo))
    expect(state.value).toContain(newTodo)
  })
  it("Should delete a todo", () => {
    const newTodo: Todo = {
      id: "123",
      todo: "Add tests",
      isCompleted: false,
    }
    store.dispatch(addTodo(newTodo))
    store.dispatch(deleteTodo(newTodo.id))
    const state = store.getState().todos

    expect(state.value).not.toContain(newTodo)
  })
  it("Should toggle a todo", () => {
    const newTodo: Todo = {
      id: "123",
      todo: "Add tests",
      isCompleted: false,
    }
    store.dispatch(addTodo(newTodo))
    store.dispatch(toggleTodo(newTodo.id))
    const state = store.getState().todos
    const value = state.value.find(({ id }) => id === "123")

    expect(value?.isCompleted).toBe(true)
  })
  it("Should edit a todo", () => {
    const newTodo: Todo = {
      id: "123",
      todo: "Add tests",
      isCompleted: false,
    }
    store.dispatch(addTodo(newTodo))
    store.dispatch(
      editTodo({ id: "123", isCompleted: false, todo: "Meeting with Justin" }),
    )
    const state = store.getState().todos
    const value = state.value.find(({ id }) => id === "123")

    expect(value?.todo).toBe("Meeting with Justin")
  })
})
