import { fireEvent, render } from "@testing-library/react"
import { addList, deleteList } from "../../ListStore/lists"
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
    expect(getByText("Things todo for the application")).toBeInTheDocument()
    store.dispatch(deleteList("12345"))
  })
  it("Should open card with options to delete, edit list name", () => {
    const openListModal = jest.fn()

    const { getByText, getByTestId } = render(
      <StateProvider>
        <SideNav openListModal={openListModal} showSideNav={true} />,
      </StateProvider>,
    )

    const dotButton = getByTestId("dot-button")
    fireEvent.click(dotButton)
    expect(getByText("Edit List Name")).toBeInTheDocument()
  })
})
