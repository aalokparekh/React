/* eslint-disable react/prop-types */
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../Services/firebase";

const PrivateRoute = ({ children }) => {
  const [user] = useAuthState(auth);
  //   const isAuth = false;
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default PrivateRoute;
