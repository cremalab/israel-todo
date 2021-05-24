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
    // editTodo(state, { payload }: PayloadAction<Todo>) {},
  },
})

export const { addTodo } = todosSlice.actions

export default todosSlice.reducer
