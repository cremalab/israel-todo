import { render } from "@testing-library/react"
import { Header } from "."

describe("Header", () => {
  test("it renders ", () => {
    const myTasks = "My Tasks"
    const { getByText } = render(<Header />)
    const element = getByText(myTasks)
    expect(element).toBeInTheDocument()
  })
})
