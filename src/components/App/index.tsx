import "./styles.scss"
import { PersistGate } from "redux-persist/integration/react"
import { persistor } from "../../store/index"
import { Header } from "../Header"
import { StateProvider } from "../StateProvider"
import { TodoContainer } from "../TodoContainer"

export function App() {
  return (
    <StateProvider>
      <PersistGate persistor={persistor} loading={null}>
        <div className="App">
          <Header />
          <TodoContainer />
        </div>
      </PersistGate>
    </StateProvider>
  )
}
