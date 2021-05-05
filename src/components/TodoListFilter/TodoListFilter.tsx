import { Todo } from "../../types/Todo"
import { TodoCard } from "../TodoCard"

export interface Props {
  allTodos: Todo[]
  markAsCompleted: (id: string) => void
  isCompleted?: boolean
}

export function TodoListFilter({
  allTodos,
  markAsCompleted,
  isCompleted,
}: Props) {
  const listFilter = (todo: Todo) =>
    isCompleted ? todo.isCompleted : !todo.isCompleted
  return (
    <>
      {allTodos
        .filter((todo) => listFilter(todo))
        .map(({ todo, id, isCompleted }) => {
          return (
            <TodoCard
              todo={todo}
              key={id}
              handleIconClick={() => {
                markAsCompleted(id)
              }}
              clicked={isCompleted}
              isCompleted={isCompleted}
            />
          )
        })}
    </>
  )
}
