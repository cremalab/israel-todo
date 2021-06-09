import decoratorCentered from "@storybook/addon-centered"
import { NewListModal } from "./NewListModal"

export default {
  title: "NewListModal",
  decorators: [decoratorCentered],
}

export const example = () => (
  <NewListModal
    setShowListModal={() => console.log("show")}
    showListModal={true}
  />
)
