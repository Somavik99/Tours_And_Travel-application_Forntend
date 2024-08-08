import { useEffect, useReducer } from "react";
import { createContext } from "react";

const initialState = {
  user: localStorage.getItem("User")
    ? JSON.parse(localStorage.getItem("User"))
    : null,
  loading: false,
  error: null,
  role: localStorage.getItem("role") || null,
  token: localStorage.getItem("token") || null,
};

export const AuthContext = createContext(initialState);

function AuthReducer(state, action) {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        token: null,
        loading: false,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        token: action.token,
        role: action.role,
        loading: false,
        error: null,
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        token: null,
        role: null,
        loading: false,
        error: null,
      };

    case "REGISTER":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("User", JSON.stringify(state.user));
    localStorage.setItem("token", state.token);
    localStorage.setItem("role", state.role);
  }, [state.user, state.token, state.role]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
