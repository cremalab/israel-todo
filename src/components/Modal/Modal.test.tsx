import { fireEvent, render } from "@testing-library/react"
import { Modal } from "./Modal"

describe("Modal", () => {
  test("renders SecondarySmallButton component", () => {
    const closeModal = jest.fn()
    const handleDelete = jest.fn()

    const { getByText } = render(
      <Modal
        title={"Confirm you would like to delete"}
        closeModal={closeModal}
        openConfirmModal={true}
        handleDelete={handleDelete}
      />,
    )
    const button = getByText("Cancel")
    fireEvent.click(button)
    expect(closeModal).toBeCalled()

    const deleteButton = getByText("Confirm")
    fireEvent.click(deleteButton)
    expect(handleDelete).toBeCalled()
  })
})
