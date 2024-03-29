import "./styles.scss"
import { HashRouter, Route } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import { persistor } from "../../store/index"
import { LandingPage } from "../LandingPage"
import { StateProvider } from "../StateProvider"
import { TodoContainer } from "../TodoContainer"

export function App() {
  return (
    <HashRouter>
      <StateProvider>
        <PersistGate persistor={persistor} loading={null}>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/todo">
            <TodoContainer />
          </Route>
        </PersistGate>
      </StateProvider>
    </HashRouter>
  )
}
