import { render } from "@testing-library/react"
import { EditListModal } from "./EditListModal"
// import React from "react"

describe("EditListModal", () => {
  it.todo(`EditListModal needs to be tested`, () => {
    render(
      <EditListModal
        showEditListModal={false}
        setShowEditListModal={() => console.log("Clicked")}
      />,
    )
    expect(EditListModal).toBeDefined()
  })
})
