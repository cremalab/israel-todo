import { Meta, Story } from "@storybook/react"
import { Props, TodoListFilter } from "./TodoListFilter"

export default {
  title: "Components/TodoListFilter",
  args: {
    allTodos: [],
    markAsCompleted: (id) => console.log(id),
    isCompleted: true,
  },
} as Meta<Props>

const Template: Story<Props> = (args) => <TodoListFilter {...args} />

export const TodoListFilterStory = Template.bind({})
TodoListFilterStory.args = {
  allTodos: [{ id: "123", todo: "Meeting", isCompleted: false }],
  isCompleted: false,
  markAsCompleted: (id) => console.log(id),
}
