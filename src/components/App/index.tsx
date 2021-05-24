import "./styles.scss"
import { Header } from "../Header"
import { StateProvider } from "../StateProvider"
import { TodoContainer } from "../TodoContainer"

export function App() {
  return (
    <StateProvider>
      <div className="App">
        <Header />
        <TodoContainer />
      </div>
    </StateProvider>
  )
}
