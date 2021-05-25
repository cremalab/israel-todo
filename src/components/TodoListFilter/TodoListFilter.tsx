import { useAppSelector } from "../../hooks/useAppSelector"
import { Todo } from "../../types/Todo"
import { TodoCard } from "../TodoCard"

export interface Props {
  markAsCompleted: (id: string) => void
  isCompleted?: boolean
  editTask: (todoObject: Todo) => void
}

export function TodoListFilter({
  markAsCompleted,
  isCompleted,
  editTask,
}: Props) {
  const todos = useAppSelector((state) => state.todos)

  const listFilter = (todo: Todo) =>
    isCompleted ? todo.isCompleted : !todo.isCompleted
  return (
    <>
      {todos.value
        .filter((todo) => listFilter(todo))
        .map(({ todo, id, isCompleted }) => {
          return (
            <TodoCard
              edit={() => editTask({ todo, id, isCompleted })}
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
