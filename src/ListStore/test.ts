import { List } from "../types/List"
import listsReducer, { addList, deleteList, editList } from "./lists"
import { store } from "."

describe("todos reducer", () => {
  it("Should add a todo", () => {
    const newList: List = {
      id: "123",
      name: "My Tasks",
    }
    const state = listsReducer(undefined, addList(newList))
    expect(state.value).toContain(newList)
  })
  describe("todos reducer", () => {
    it("Should add a new list", () => {
      const newList: List = {
        id: "123",
        name: "My Tasks",
      }
      const state = listsReducer(undefined, addList(newList))
      expect(state.value).toContain(newList)
    })

    it("Should delete a list", () => {
      const newList: List = {
        id: "123",
        name: "Things to do",
      }
      store.dispatch(addList(newList))
      store.dispatch(deleteList(newList.id))
      const state = store.getState().lists

      expect(state.value).not.toContain(newList)
    })
    it("Should edit a list", () => {
      const newList: List = {
        id: "123",
        name: "Things to do",
      }
      store.dispatch(addList(newList))
      store.dispatch(
        editList({
          id: "123",
          name: "Things to be done",
        }),
      )
      const state = store.getState().lists
      expect(state.value[0].name).toBe("Things to be done")
    })
  })
})
