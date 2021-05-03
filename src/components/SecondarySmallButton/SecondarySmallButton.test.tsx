import { fireEvent, render } from "@testing-library/react"
import { SecondarySmallButton } from "."

describe("SecondarySmallButton", () => {
  test("renders SecondarySmallButton component", () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <SecondarySmallButton name="Cancel" closeModal={onClick} />,
    )
    const button = getByText("Cancel")
    fireEvent.click(button)
    expect(onClick).toBeCalled()
  })
})
