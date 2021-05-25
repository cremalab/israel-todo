import { render } from "@testing-library/react"
import { EditTaskModal } from "."

describe("Form", () => {
  test("Form", () => {
    const onClick = jest.fn()
    // const handleDelete = jest.fn()
    render(
      <EditTaskModal
        showEditModal={true}
        closeModal={onClick}
        showModal={false}
      />,
    )
    expect(EditTaskModal).toBeDefined()
  })
})
