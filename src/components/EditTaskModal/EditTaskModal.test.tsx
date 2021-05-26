import { render } from "@testing-library/react"
import { StateProvider } from "../StateProvider"
import { EditTaskModal } from "."

describe("Form", () => {
  test("Form", () => {
    const onClick = jest.fn()

    render(
      <StateProvider>
        <EditTaskModal
          showEditModal={true}
          closeModal={onClick}
          showModal={false}
        />
      </StateProvider>,
    )
    expect(EditTaskModal).toBeDefined()
  })
})
