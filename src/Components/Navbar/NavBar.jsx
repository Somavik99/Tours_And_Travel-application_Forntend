import { Link } from "react-router-dom";
import AchiversItLogo from "../../assets/logo.png";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="Nav_elements">
      <div>
        <img src={AchiversItLogo} alt="AchiversIt" />
      </div>
      <ul className="List_elements">
        <li>
          <Link to={"/"} className="Route__link">
            Home
          </Link>
        </li>
        <li>  <Link to={"/getalltours"} className="Route__link">
            Tours
          </Link></li>
        <li>
          <Link to={"/logIn"} className="Route__link">
            Login
          </Link>
        </li>
        <li>
          <Link to={"/signUp"} className="Route__link1">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
