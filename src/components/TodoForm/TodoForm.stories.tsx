import { Meta, Story } from "@storybook/react"
import { Props, TodoForm } from "."

export default {
  title: "Components/NewTask",
  args: { open: true },
  argTypes: {
    onClick: { action: "clicked" },
    onChange: { action: "Change" },
    closeModal: { action: "clicked" },
  },
} as Meta<Props>

const Template: Story<Props> = (args) => <TodoForm {...args} />

export const NewTaskStory = Template.bind({})
