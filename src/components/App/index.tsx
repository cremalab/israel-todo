import "./styles.scss"
import { BrowserRouter, Route } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import { persistor } from "../../store/index"
import { Header } from "../Header"
import { LandingPage } from "../LandingPage"
import { StateProvider } from "../StateProvider"
import { TodoContainer } from "../TodoContainer"

export function App() {
  return (
    <BrowserRouter>
      <StateProvider>
        <PersistGate persistor={persistor} loading={null}>
          <div className="App">
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/todo">
              <Header />
              <TodoContainer />
            </Route>
          </div>
        </PersistGate>
      </StateProvider>
    </BrowserRouter>
  )
}
