import { render } from "@testing-library/react"
import { Header } from "../Header"
import { Modal } from "./Modal"

describe("Modal", () => {
  it("should show up when open and should render children", () => {
    const toggleSideNav = jest.fn()
    const { getByText } = render(
      <Modal open={true}>
        <Header toggleSideNav={toggleSideNav} />
      </Modal>,
    )
    expect(getByText("My Tasks")).toBeInTheDocument()
  })
})
