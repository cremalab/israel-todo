import decoratorCentered from "@storybook/addon-centered"
import { EditTaskModal } from "./EditTaskModal"

export default {
  title: "EditTaskModal",
  decorators: [decoratorCentered],
}

export const example = () => (
  <EditTaskModal
    setAllTodos={(value) => console.log(value)}
    allTodos={[]}
    closeModal={() => console.log("close")}
    showEditModal={true}
    todoText={"hi"}
  />
)
