import "./styles.scss"
import { Link } from "react-router-dom"
import { ReactComponent as LandingLogo } from "../../assets/svg/LandingLogo.svg"
import { PrimarySmallButton } from "../PrimarySmallButton"

export function LandingPage() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <LandingLogo />
        </div>
      </div>
      <div className="welcome-section">
        <h2 id="welcome-header">Welcome!</h2>
        <p id="welcome-p">Get things done with Todo.</p>
        <Link to="/todo" className="link">
          <PrimarySmallButton id="get-started" name={"Get Started"} />
        </Link>
      </div>
    </>
  )
}
