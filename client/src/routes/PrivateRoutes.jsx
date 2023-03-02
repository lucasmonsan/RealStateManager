import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { LoginContext } from "../contexts/LoginController";

export const PrivateRoutes = () => {
  const { signed } = useContext(LoginContext);
  return signed ? <Outlet/> : <Navigate to="/login"/>
}