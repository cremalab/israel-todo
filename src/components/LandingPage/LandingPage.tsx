import "./styles.scss"
import { Link } from "react-router-dom"
import { ReactComponent as LandingLogo } from "../../assets/svg/LandingLogo.svg"

export function LandingPage() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <LandingLogo />
        </div>
      </div>
      <div className="welcome-section">
        <h2>Welcome!</h2>
        <p>Get things done with Todo.</p>
        <Link to="/todo" className="link">
          <button>
            <span>Get Started</span>
          </button>
        </Link>
      </div>
    </>
  )
}
