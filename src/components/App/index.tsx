import "./styles.scss"
import { Header } from "../Header"
import { NewTask } from "../NewTask"
import { TodoCard } from "../TodoCard"

export function App() {
  return (
    <div className="App">
      <Header />
      <TodoCard />
      <NewTask />
    </div>
  )
}
