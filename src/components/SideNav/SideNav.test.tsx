import { fireEvent, render } from "@testing-library/react"
import { store } from "../../store"
import { setCurrentList } from "../../store/currentList"
import { List } from "../../types/List"
import { StateProvider } from "../StateProvider"
import { SideNav } from "./SideNav"

describe("SideNav", () => {
  const newList: List = {
    id: "12345",
    name: "Things todo for the application",
  }
  store.dispatch(setCurrentList(newList))
  it("should allow user to create new task", () => {
    const openListModal = jest.fn()

    const { getByText } = render(
      <StateProvider>
        <SideNav openListModal={openListModal} showSideNav={true} />,
      </StateProvider>,
    )

    const createButton = getByText("+ Create New List")
    fireEvent.click(createButton)
    expect(getByText("My Tasks")).toBeInTheDocument()
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
