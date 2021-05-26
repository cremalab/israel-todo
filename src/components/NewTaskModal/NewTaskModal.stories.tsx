import { Meta, Story } from "@storybook/react"
import { NewTaskModal, Props } from "./NewTaskModal"

export default {
  title: "Components/NewTask",
  args: {
    showModal: true,
  },
  argTypes: {
    closeModal: { action: "clicked" },
  },
} as Meta<Props>

export const example: Story<Props> = (args) => <NewTaskModal {...args} />
