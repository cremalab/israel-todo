import MenuIcon from "@material-ui/icons/Menu"
import "./styles.scss"

export function Header() {
  return (
    <div id="header">
      <MenuIcon className="menu-icon" />
      <p id="header-title">My Tasks</p>
    </div>
  )
}
