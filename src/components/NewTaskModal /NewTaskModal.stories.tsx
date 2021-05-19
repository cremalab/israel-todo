import { Meta, Story } from "@storybook/react"
import { NewTaskModal, Props } from "./NewTaskModal"

export default {
  title: "Components/NewTask",
  args: {
    showModal: true,
    allTodos: [{ id: "123", todo: "Hello", isCompleted: false }],
  },
  argTypes: {
    closeModal: { action: "clicked" },
    setAllTodos: { action: "clicked" },
  },
} as Meta<Props>

export const example: Story<Props> = (args) => <NewTaskModal {...args} />
