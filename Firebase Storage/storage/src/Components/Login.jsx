import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../Services/firebase";
import GoogleButton from "react-google-button";
const Login = () => {
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const handleLogout = () => {
    signOut(auth)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        alert("logout");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <GoogleButton
        onClick={handleClick}
        style={{ margin: "auto", marginBottom: "10px" }}
      >
        Login with Google
      </GoogleButton>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
