import AchiversItLogo from "../../assets/logo.png";
import "./NavBar.css"


function NavBar() {
  return (
    <div className="Nav_elements">
      <div>
        <img src={AchiversItLogo} alt="AchiversIt" />
      </div>
      <ul className="List_elements">
        <li>Home</li>
        <li>Tours</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  );
}

export default NavBar;
