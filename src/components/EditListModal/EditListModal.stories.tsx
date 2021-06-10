import decoratorCentered from "@storybook/addon-centered"
import { EditListModal } from "./EditListModal"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "EditListModal",
  decorators: [decoratorCentered],
}

export const example = () => (
  <EditListModal
    setShowEditListModal={() => console.log("Clicked")}
    showEditListModal={false}
  />
)
