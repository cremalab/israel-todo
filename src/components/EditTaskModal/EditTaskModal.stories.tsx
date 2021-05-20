import decoratorCentered from "@storybook/addon-centered"
import { EditTaskModal } from "./EditTaskModal"

export default {
  title: "EditTaskModal",
  decorators: [decoratorCentered],
  argTypes: {
    onClick: { action: "clicked" },
    closeModal: { action: "clicked" },
  },
}

export const example = () => (
  <EditTaskModal
    showConfirmModal={() => console.log("hello")}
    setAllTodos={(value) => console.log(value)}
    allTodos={[]}
    closeModal={() => console.log("close")}
    showEditModal={true}
    todo={{ id: "123", todo: "Meeting with Justin", isCompleted: false }}
    closeConfirmModal={() => console.log("closed")}
    openConfirmModal={false}
  />
)
