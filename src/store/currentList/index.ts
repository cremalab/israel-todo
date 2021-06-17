import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { List } from "../../types/List"

interface CurrentListState {
  value: List[]
}
const initialState: CurrentListState = {
  value: [],
}

export const currentListSlice = createSlice({
  name: "currentList",
  initialState,
  reducers: {
    setCurrentList(state, action: PayloadAction<List>) {
      state.value = [action.payload]
    },
  },
})

export const { setCurrentList } = currentListSlice.actions

export default currentListSlice.reducer
