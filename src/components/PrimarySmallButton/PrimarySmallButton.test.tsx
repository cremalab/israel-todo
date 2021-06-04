import { fireEvent, render } from "@testing-library/react"
import { PrimarySmallButton } from "./index"

describe("PrimarySmallButton", () => {
  test("renders PrimarySmallButton component", () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <PrimarySmallButton name="Save" onClick={onClick} />,
    )
    const button = getByText("Save")
    fireEvent.click(button)
    expect(onClick).toBeCalled()
  })
})
