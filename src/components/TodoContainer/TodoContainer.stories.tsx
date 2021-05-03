import { Meta, Story } from "@storybook/react"
import { TodoContainer } from "."

export default {
  title: "Components/TodoContainer",
} as Meta

const Template: Story = (args) => <TodoContainer {...args} />

export const TodoContainerStory = Template.bind({})
