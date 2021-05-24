import { configureStore } from "@reduxjs/toolkit"
import todos from "./todos"

export const store = configureStore({
  reducer: {
    todos,
  },
})
