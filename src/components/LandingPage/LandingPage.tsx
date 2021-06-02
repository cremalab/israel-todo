import "./styles.scss"
import DoneIcon from "@material-ui/icons/Done"
import { Link } from "react-router-dom"

export function LandingPage() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div id="oval"></div>
          <div id="todo-section">
            <DoneIcon className="checkmark" style={{ fontSize: "5em" }} />
            <div id="underline"></div>
            <h1 id="title">todo</h1>
          </div>
        </div>
      </div>
      <div className="welcome-section">
        <h2>Welcome!</h2>
        <p>Get things done with Todo.</p>
        <Link to="todo" className="link">
          <button data-testid="get-started">
            <span>Get Started</span>
          </button>
        </Link>
      </div>
    </>
  )
}
