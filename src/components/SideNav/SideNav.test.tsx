import { fireEvent, render } from "@testing-library/react"
import { SideNav } from "./SideNav"

describe("SideNav", () => {
  it("should allow user to create new task", () => {
    const list = ["List Name"]
    const openListModal = jest.fn()

    const { getByText } = render(
      <SideNav
        listNames={list}
        openListModal={openListModal}
        showSideNav={true}
      />,
    )

    const createButton = getByText("+ Create New List")

    fireEvent.click(createButton)

    expect(openListModal).toHaveBeenCalled()
  })
})
