import "./styles.scss"
import { Header } from "../Header"
import { TodoContainer } from "../TodoContainer"

export function App() {
  return (
    <div className="App">
      <Header />
      <TodoContainer />
    </div>
  )
}
