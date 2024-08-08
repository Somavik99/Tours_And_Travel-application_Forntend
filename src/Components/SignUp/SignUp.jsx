import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URI } from "../URL/configFile";
import registerPng from "../../assets/register.png";
import userPng from "../../assets/user.png";
import "./SignUp.css";

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

  const RegularExp = {
    nameExp: new RegExp(/^[A-Za-z]+([\\ A-Za-z]+)*/),
    emailExp: new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    passwordExp: new RegExp(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    ),
  };

  // Handling sing up form submission

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      if (
        RegularExp.nameExp.test(credentials.name) &&
        RegularExp.emailExp.test(credentials.email) &&
        RegularExp.passwordExp.test(credentials.password) &&
        credentials.phone.split("").length === 10
      ) {
        const resp = await fetch(
          `${BASE_URI}/authorizations/userRegistration`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          }
        );
        const result = await resp.json();

        if (!result.ok) {
          console.log(result.message);
        }
        navigate("/logIn");
      } else {
        alert("Requirements not matched...! Fill all the fields...!");
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <section className="signUp__container">
      <form>
        <div className="img">
          <img src={registerPng} alt="Register" />
        </div>
        <img src={userPng} alt="user" className="user__png" />
        <section className="input__cont">
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "600",
              marginTop: "10px",
              color: "white",
            }}
          >
            Register
          </h1>
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            style={{
              outlineOffset: "-0.3rem",
              outline: RegularExp.nameExp.test(credentials.name)
                ? "4px solid rgba(53, 117, 255, 0.293)"
                : credentials.name === ""
                ? "4px solid rgba(63, 151, 252, 0.564)"
                : "4px solid rgba(255, 0, 0, 0.698)",
            }}
            value={credentials.name}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            value={credentials.email}
            onChange={(e) => handleChange(e)}
            style={{
              outlineOffset: "-0.3rem",
              outline: RegularExp.emailExp.test(credentials.email)
                ? "4px solid rgba(53, 117, 255, 0.293)"
                : credentials.email === ""
                ? "4px solid rgba(63, 151, 252, 0.564)"
                : "4px solid rgba(255, 0, 0, 0.698)",
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password..."
            value={credentials.password}
            onChange={(e) => handleChange(e)}
            style={{
              outlineOffset: "-0.3rem",
              outline: RegularExp.passwordExp.test(credentials.password)
                ? "4px solid rgba(53, 117, 255, 0.293)"
                : credentials.password === ""
                ? "4px solid rgba(63, 151, 252, 0.564)"
                : "4px solid rgba(255, 0, 0, 0.698)",
            }}
          />
          <input
            type="number"
            name="phone"
            placeholder="Enter your number..."
            value={credentials.phone}
            onChange={(e) => handleChange(e)}
            style={{
              outlineOffset: "-0.3rem",
              outline:
                credentials.phone.split("").length === 10 ||
                credentials.phone === ""
                  ? "4px solid rgba(63, 151, 252, 0.564)"
                  : "4px solid rgba(255, 0, 0, 0.698)",
            }}
          />
          <button onClick={handleFormSubmit} type="submit">
            Sign Up
          </button>
          <p style={{ fontSize: "25px", fontWeight: "600", marginTop: "10px" }}>
            Already have an account?{" "}
            <Link
              to={"/logIn"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Login !
            </Link>
          </p>
        </section>
      </form>
    </section>
  );
}

export default SignUp;
