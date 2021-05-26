import { Meta, Story } from "@storybook/react"
import { Props, TodoListFilter } from "./TodoListFilter"

export default {
  title: "Components/TodoListFilter",
  args: {
    markAsCompleted: (id) => console.log(id),
    isCompleted: true,
  },
} as Meta<Props>

const Template: Story<Props> = (args) => <TodoListFilter {...args} />

export const TodoListFilterStory = Template.bind({})
TodoListFilterStory.args = {
  isCompleted: false,
  markAsCompleted: (id) => console.log(id),
}
