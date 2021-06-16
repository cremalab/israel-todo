import { render } from "@testing-library/react"
import { StateProvider } from "../StateProvider"
import { EditListModal } from "./EditListModal"
// import React from "react"

describe("EditListModal", () => {
  it(`EditListModal needs to be tested`, () => {
    render(
      <StateProvider>
        <EditListModal
          showEditListModal={false}
          setShowEditListModal={() => console.log("Clicked")}
        />
        ,
      </StateProvider>,
    )
    expect(EditListModal).toBeDefined()
  })
})
