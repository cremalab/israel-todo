import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { List } from "../types/List"

interface ListState {
  value: List[]
}
const initialState: ListState = {
  value: [],
}

export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList(state, action: PayloadAction<List>) {
      state.value = [...state.value, action.payload]
    },
    deleteList(state, action: PayloadAction<List["id"]>) {
      state.value = state.value.filter((todo) => todo.id !== action.payload)
    },
    editList(state, action: PayloadAction<List>) {
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

export const { addList, deleteList, editList } = listsSlice.actions

export default listsSlice.reducer
