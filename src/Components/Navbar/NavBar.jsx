import { Link, useNavigate } from "react-router-dom";
import AchiversItLogo from "../../assets/logo.png";
import "./NavBar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/Context";
import avatar from "../../assets/avatar.jpg";
import { ACTIONS } from "../Context/Actions";
import { TbMenu } from "react-icons/tb";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  function logoutHandler() {
    dispatch({ type: ACTIONS.LOGOUT });
    navigate("/");
  }

  function submitToursTravelForm() {
    navigate("/user");
  }

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/logIn");
  //   }
  // }, [user, navigate]);

  return (
    <nav className="Nav_elements">
      <div>
        <img src={AchiversItLogo} alt="AchiversIt" />
      </div>
      <section className="menu__bar" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen === true ? (
          <motion.div>
            <RxCross1 size={50} style={{ margin: "10px" }} />
          </motion.div>
        ) : (
          <motion.div>
            <TbMenu size={50} style={{ margin: "10px" }} />
          </motion.div>
        )}
      </section>
      <motion.ul
        initial={{ height: 0 }}
        animate={{
          height: "100%",
          transition: {
            duration: 0.5,
          },
        }}
        className={menuOpen ? "List_elements_open" : ""}
      >
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
            <Link className="Route__link1">Log Out</Link>
          </li>
        ) : (
          <li>
            <Link to={"/signUp"} className="Route__link1">
              Register
            </Link>
          </li>
        )}
      </motion.ul>
    </nav>
  );
}

export default NavBar;
