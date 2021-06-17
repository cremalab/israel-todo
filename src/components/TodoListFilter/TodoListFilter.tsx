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
  const currentlList = useAppSelector((state) => state.currentList)

  const listFilter = (todo: Todo) =>
    isCompleted
      ? todo.isCompleted && todo.listId === currentlList.value[0].id
      : !todo.isCompleted && todo.listId === currentlList.value[0].id
  return (
    <>
      {todos.value
        .filter((todo) => listFilter(todo))
        .map(({ todo, id, isCompleted, listId }) => {
          return (
            <TodoCard
              edit={() => editTask({ todo, id, isCompleted, listId })}
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
