import { stat } from "node:fs"
import { Todo } from "../types/Todo"
import todosReducer, { addTodo, deleteTodo, toggleTodo } from "./todos"
import { store } from "."

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
    expect(state.value[0].isCompleted).toBe(true)
  })
})
