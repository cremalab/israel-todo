import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { StateProvider } from "../StateProvider"
import { LandingPage } from "./LandingPage"

describe("LandingPage", () => {
  it(`LandingPage should render `, () => {
    const { getByText } = render(
      <BrowserRouter>
        <StateProvider>
          <LandingPage />
        </StateProvider>
      </BrowserRouter>,
    )
    const getStarted = getByText("Get Started")
    expect(getStarted).toBeInTheDocument()
  })
})
