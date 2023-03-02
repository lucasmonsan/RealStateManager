import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { PrivateRoutes } from "./PrivateRoutes";

export const RouterController = () => {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoutes/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}