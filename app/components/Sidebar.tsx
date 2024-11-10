import classes from "./Sidebar.module.css";
import NBAHubLogo from "./NBAHubLogo";
import NavLinks from "./NavLinks";

function Sidebar() {
  return (
    <nav className={classes.sidebar}>
      <NBAHubLogo />
      <NavLinks />
    </nav>
  );
}

export default Sidebar;
