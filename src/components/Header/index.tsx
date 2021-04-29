import MenuIcon from "@material-ui/icons/Menu"
import "./styles.scss"
import { Sticky } from "../Sticky"

export function Header() {
  return (
    <Sticky>
      <div id="header">
        <MenuIcon className="menu-icon" />
        <h4 id="header-title">My Tasks</h4>
      </div>
    </Sticky>
  )
}
