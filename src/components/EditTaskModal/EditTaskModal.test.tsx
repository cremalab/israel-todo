import { fireEvent, render } from "@testing-library/react"
import { store } from "../../store"
import { addTodo } from "../../store/todos"
import { Todo } from "../../types/Todo"
import { StateProvider } from "../StateProvider"
import { EditTaskModal } from "."

describe("Form", () => {
  const newTodo: Todo = {
    id: "123",
    todo: "Add tests",
    isCompleted: false,
    listId: "111",
  }
  beforeEach(() => {
    store.dispatch(addTodo(newTodo))
  })
  test("todo to be edited", () => {
    const onClick = jest.fn()

    const { getByText, getByPlaceholderText } = render(
      <StateProvider>
        <EditTaskModal
          todo={newTodo}
          showEditModal={true}
          closeModal={onClick}
          showModal={true}
        />
      </StateProvider>,
    )

    expect(EditTaskModal).toBeDefined()

    const input = getByPlaceholderText("Task description") as HTMLInputElement
    fireEvent.change(input, { target: { value: "Zoom Meeting" } })
    const saveButton = getByText("Save")
    fireEvent.click(saveButton)
    const state = store.getState().todos

    expect(state.value[0].todo).toBe("Zoom Meeting")
  })
  it("Should delete todo", () => {
    const onClick = jest.fn()
    const { getByTestId, getByText } = render(
      <StateProvider>
        <EditTaskModal
          todo={newTodo}
          showEditModal={true}
          closeModal={onClick}
          showModal={true}
        />
      </StateProvider>,
    )

    const deleteButton = getByTestId("delete-button")
    fireEvent.click(deleteButton)
    const confirmButton = getByText("Confirm")
    fireEvent.click(confirmButton)
    const state = store.getState().todos
    const value = state.value.find(({ id }) => id === "123")
    expect(value).toBeUndefined()
  })
})
