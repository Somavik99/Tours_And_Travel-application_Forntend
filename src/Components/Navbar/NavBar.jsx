import { Link, useNavigate } from "react-router-dom";
import AchiversItLogo from "../../assets/logo.png";
import "./NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import avatar from "../../assets/avatar.jpg";
import { ACTIONS } from "../Context/Actions";

function NavBar() {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  function logoutHandler() {
    dispatch({ type: ACTIONS.LOGOUT });
    navigate("/");
  }

  function submitToursTravelForm(){
    navigate("/user")
  }

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/logIn");
  //   }
  // }, [user, navigate]);

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
        <li>
          <Link to={"/getalltours"} className="Route__link">
            Tours
          </Link>
        </li>
        <li>
          {user ? (
            <>
              <img
                src={avatar}
                alt="avatar"
                style={{
                  width: "50px",
                  border: "2px solid orange",
                  borderRadius: "50px",
                }}
onClick={submitToursTravelForm}
              />
            </>
          ) : (
            <Link to={"/logIn"} className="Route__link">
              Login
            </Link>
          )}
        </li>

        {user ? (
          <li onClick={logoutHandler}>
            <Link  className="Route__link1">Log Out</Link>
          </li>
        ) : (
          <li>
            <Link to={"/signUp"} className="Route__link1">
              Register
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavBar;
