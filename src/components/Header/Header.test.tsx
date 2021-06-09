import { render } from "@testing-library/react"
import { Header } from "."

describe("Header", () => {
  test("it renders ", () => {
    const myTasks = "My Tasks"
    const toggleSideNav = jest.fn()
    const { getByText } = render(<Header toggleSideNav={toggleSideNav} />)
    const element = getByText(myTasks)
    expect(element).toBeInTheDocument()
  })
})
