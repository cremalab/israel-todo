import { fireEvent, render } from "@testing-library/react"
import { store } from "../../store"
import { addTodo } from "../../store/todos"
import { Todo } from "../../types/Todo"
import { StateProvider } from "../StateProvider"
import { EditTaskModal } from "."

describe("Form", () => {
  test("Form", () => {
    const onClick = jest.fn()
    const newTodo: Todo = {
      id: "123",
      todo: "Add tests",
      isCompleted: false,
    }

    store.dispatch(addTodo(newTodo))

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
})
