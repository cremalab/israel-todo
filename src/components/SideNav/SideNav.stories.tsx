import decoratorCentered from "@storybook/addon-centered"
import { SideNav } from "./SideNav"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "SideNav",
  decorators: [decoratorCentered],
}

export const example = () => (
  <SideNav
    showSideNav={true}
    openListModal={() => console.log("show")}
    listNames={["My Tasks"]}
  />
)
