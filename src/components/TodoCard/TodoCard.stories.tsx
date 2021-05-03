import { Meta, Story } from "@storybook/react"
import { Props, TodoCard } from "."

export default {
  title: "Components/TodoCard",
  args: {
    todo: "Meeting with Justin",
    isCompleted: false,
  },
} as Meta<Props>

const Template: Story<Props> = (args) => <TodoCard {...args} />

export const IncompleteTodo = Template.bind({})
IncompleteTodo.args = { todo: "Whatever" }

export const CompleteTodo = Template.bind({})
