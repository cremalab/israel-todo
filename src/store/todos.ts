import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Todo } from "../types/Todo"

interface TodosState {
  value: Todo[]
}
const initialState: TodosState = {
  value: [],
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.value = [...state.value, action.payload]
    },
    deleteTodo(state, action: PayloadAction<Todo["id"]>) {
      state.value = state.value.filter((todo) => todo.id !== action.payload)
    },
    editTodo(state, action: PayloadAction<Todo>) {
      const updatedTodos = state.value.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload }
        }
        return item
      })
      state.value = updatedTodos
    },
  },
})

export const { addTodo, deleteTodo, editTodo } = todosSlice.actions

export default todosSlice.reducer
