import { Outlet, Navigate } from "react-router-dom"
import { useSelector } from "react-redux";

const AuthRequired = () => {
  const {userInfo} = useSelector((state) => state.auth);

  return userInfo ? <Outlet /> : <Navigate to="/" />
}

export default AuthRequired