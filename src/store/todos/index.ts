import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Todo } from "../../types/Todo"

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
      console.log(state.value)
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
    toggleTodo(state, action: PayloadAction<Todo["id"]>) {
      const updatedList = state.value.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isCompleted: !item.isCompleted }
        }
        return item
      })
      state.value = updatedList
    },
  },
})

export const { addTodo, deleteTodo, editTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer
