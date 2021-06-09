import MenuIcon from "@material-ui/icons/Menu"
import "./styles.scss"
import { Sticky } from "../Sticky"

interface Props {
  toggleSideNav: () => void
}
export function Header({ toggleSideNav }: Props) {
  return (
    <>
      <Sticky>
        <div id="header">
          <MenuIcon className="menu-icon" onClick={toggleSideNav} />
          <h4 id="header-title">My Tasks</h4>
        </div>
      </Sticky>
    </>
  )
}
