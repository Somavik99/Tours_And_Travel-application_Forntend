import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import { BASE_URI } from "../URL/configFile";
import LoginPng from "../../assets/login.png";
import userPng from "../../assets/user.png";
import "./Login.css";
import ButtonLoader from "../ButtonLoader/ButtonLoader";

function Login() {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginCredentials((prevState) => ({ ...prevState, [name]: value }));
  }

  // Handling login form submission

  async function handleLogin(e) {
    e.preventDefault();
    dispatch({
      type: "LOGIN_START",
    });
    setLoading(true);
    try {
      const resp = await fetch(`${BASE_URI}/authorizations/userLogin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(loginCredentials),
      });
      const result = await resp.json();
      if (!result.ok) {
        console.log(result.message);
      }
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: result.data,
        role: result.role,
        token: result.token,
      });
      setLoading(false);
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  }

  useEffect(() => {
    if (!user) {
      return navigate("/logIn");
    }
  }, [navigate, user]);

  return (
    <section className="Login__container">
      <form>
        <div className="img__cont">
          <img src={LoginPng} alt="Login" />
        </div>
        <img src={userPng} alt="user" className="user__png" />
        <section className="Login__inp">
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "600",
              marginTop: "10px",
              color: "white",
            }}
          >
            Login
          </h1>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            value={loginCredentials.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password..."
            value={loginCredentials.password}
            onChange={handleChange}
          />
          <button onClick={handleLogin}>
            {loading === true ? (
              <div style={{display:"flex",justifyContent:"center"}}>
                <ButtonLoader />
              </div>
            ) : (
              "Log In"
            )}
          </button>
          <p style={{ fontSize: "25px", fontWeight: "600", marginTop: "10px" }}>
            Do not have an account?
            <Link
              to={"/signUp"}
              style={{ textDecoration: "none", color: "white" }}
            >
              SignUp !
            </Link>
          </p>
        </section>
      </form>
    </section>
  );
}

export default Login;
