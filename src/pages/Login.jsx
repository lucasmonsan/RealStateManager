import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginController"

export const Login = () => {
  const { signed } = useContext(LoginContext);
  
  if (signed) {
    return <Navigate to="/dashboard"/>
  } else {
    return (
      <div>
        Login
      </div>
    )
  }
}