import decoratorCentered from "@storybook/addon-centered"
import { TodoListFilter } from "./TodoListFilter"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "TodoListFilter",
  decorators: [decoratorCentered],
}

export const example = () => (
  <TodoListFilter
    allTodos={[]}
    markAsCompleted={(id) => console.log(id)}
    isCompleted
  />
)
