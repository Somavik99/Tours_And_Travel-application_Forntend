import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import { BASE_URI } from "../URL/configFile";

function Login() {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginCredentials((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleLogin(e) {
    e.preventDefault();
    dispatch({
      type: "LOGIN_START",
    });
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
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  }

  useEffect(() => {
    if (!user) {
      return navigate("/logIn");
    } else {
      return navigate("/");
    }
  }, [navigate, user]);

  return (
    <form>
      <input
        type="email"
        name="email"
        value={loginCredentials.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={loginCredentials.password}
        onChange={handleChange}
      />
      <button onClick={handleLogin}>Log In</button>
    </form>
  );
}

export default Login;
