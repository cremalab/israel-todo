import { fireEvent, render } from "@testing-library/react"
import { addList } from "../../ListStore/lists"
import { store } from "../../store"
import { StateProvider } from "../StateProvider"
import { SideNav } from "./SideNav"

describe("SideNav", () => {
  it("should allow user to create new task", () => {
    store.dispatch(
      addList({ id: "12345", name: "Things todo for the application" }),
    )
    const openListModal = jest.fn()

    const { getByText } = render(
      <StateProvider>
        <SideNav openListModal={openListModal} showSideNav={true} />,
      </StateProvider>,
    )

    const createButton = getByText("+ Create New List")

    fireEvent.click(createButton)

    expect(openListModal).toHaveBeenCalled()

    expect(getByText("Things todo for the application")).toBeInTheDocument()
  })
})
