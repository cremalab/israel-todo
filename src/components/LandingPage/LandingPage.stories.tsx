import decoratorCentered from "@storybook/addon-centered"
import { LandingPage } from "./LandingPage"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "LandingPage",
  decorators: [decoratorCentered],
}

export const example = () => <LandingPage />
