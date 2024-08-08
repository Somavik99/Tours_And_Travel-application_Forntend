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
        <li>Home</li>
        <li>Tours</li>
        <li>
          <Link
            to={"/logIn"}
            style={{ textDecoration: "none", color: "black" }}
          >
            Login
          </Link>
        </li>
        <li>
          <Link to={"/signUp"} style={{ textDecoration: "none", color: "black" }}>
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
