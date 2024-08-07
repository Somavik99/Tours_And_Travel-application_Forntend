import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URI } from "../URL/configFile";

function SignUp() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      const resp = await fetch(`${BASE_URI}/authorizations/userRegistration`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const result = await resp.json();

      if (!result.ok) {
        console.log(result.message);
      }
      navigate("/logIn");
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <form>
      <input
        type="text"
        name="name"
        value={credentials.name}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="email"
        name="email"
        value={credentials.email}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="number"
        name="phone"
        value={credentials.phone}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleFormSubmit} type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default SignUp;
