import { fireEvent, render } from "@testing-library/react"
import { StateProvider } from "../StateProvider"
import { SideNav } from "./SideNav"

describe("SideNav", () => {
  it("should allow user to create new task", () => {
    const openListModal = jest.fn()

    const { getByText } = render(
      <StateProvider>
        <SideNav openListModal={openListModal} showSideNav={true} />,
      </StateProvider>,
    )

    const createButton = getByText("+ Create New List")

    fireEvent.click(createButton)

    expect(openListModal).toHaveBeenCalled()
  })
})
